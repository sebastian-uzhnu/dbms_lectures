# MongoDB: Безпека

Історично MongoDB мала репутацію «дірявої» — бо за замовчуванням вона запускалась без пароля і слухала всі інтерфейси. У 2017 році хвиля ransomware-атак зашифрувала **понад 28 000 відкритих Mongo-серверів** за кілька тижнів. У 2019 — витік бази на 800 мільйонів email через незахищену інсталяцію. Зараз налаштування «з коробки» стали адекватнішими, але **безпека — це ваша відповідальність**, не вендора.

> Ця лекція — продовження [основної лекції про MongoDB](/lecture_mongodb). Там ми розібрали CRUD, індекси й агрегації. Тут — як не втратити дані, не потрапити в новини й не отримати штраф за GDPR.

> **Аналогія:** База даних — це сейф у підвалі вашого будинку. Ви можете купити найдорожчий сейф, але якщо двері підвалу відкриті навстіж — сенсу нуль. Безпека працює шарами: двір, будинок, підвал, сейф, папка всередині. Якщо зламали один шар — інші тримають.

---

## Модель загроз: від кого взагалі захищаємось?

Перш ніж сипати налаштуваннями, зрозумійте **хто і навіщо** може зазіхнути на вашу базу:

| Загроза                        | Хто це                        | Що хоче                          |
| ------------------------------ | ----------------------------- | -------------------------------- |
| Боти-сканери                   | Автоматизовані атаки          | Знайти відкриті 27017 і зашифрувати |
| Внутрішній зловмисник          | Незадоволений співробітник    | Скопіювати базу клієнтів         |
| Зовнішній атакуючий            | Цілеспрямована атака          | Вкрасти персональні дані         |
| Випадкове витікання            | Ваш колега з git push         | Злити `.env` у публічний репо    |
| Помилка розробника             | Ви о 3 ночі                   | `deleteMany({})` замість `{_id}` |
| Втрата носія                   | Хтось загубив ноутбук/диск    | Отримати фізичний доступ до даних |

Кожен шар, про який ми говоримо нижче, захищає від певних загроз. Не всі шари потрібні всім — але **мінімум три** (авторизація, мережева ізоляція, бекапи) потрібні завжди.

---

## 1. Автентифікація: ніколи без пароля

### Увімкнути авторизацію

```yaml
# mongod.conf
security:
  authorization: enabled
```

У Docker — **обов'язково** задавайте root-креденшіали:

```bash
docker run --name my-mongo \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD='$2y$10$veryStrong!' \
  -p 127.0.0.1:27017:27017 \
  -d mongo:7
```

Зверніть увагу: `127.0.0.1:27017:27017` — порт біндиться **лише на localhost**, а не на всі інтерфейси. Це одна з найдешевших і найефективніших захистів.

> **Поширена помилка:** Запустити Mongo «на потестити» без пароля і відкрити порт 27017 назовні. За годину знайдуть боти і залишать вам записку: «ваші дані тут, пришліть 0.1 BTC». Це реальність, не параноя — перевірте самі на [shodan.io](https://www.shodan.io/search?query=mongodb).

### Механізми автентифікації (SCRAM, x.509, LDAP, Kerberos)

MongoDB підтримує кілька механізмів:

- **SCRAM-SHA-256** — за замовчуванням, підходить майже всім. Пароль ніколи не передається у відкритому вигляді (challenge-response)
- **x.509** — автентифікація клієнтським TLS-сертифікатом. Ідеально для сервіс-ту-сервіс
- **LDAP** / **Kerberos** — корпоративна інтеграція з Active Directory (Enterprise)
- **MONGODB-AWS** — IAM-ролі AWS для MongoDB Atlas

```javascript
// Підключення з SCRAM (за замовчуванням)
mongodb://user:pass@host:27017/mydb?authSource=admin&authMechanism=SCRAM-SHA-256
```

> **Pro Tip:** У продакшні не використовуйте `SCRAM-SHA-1` (застарів). Завжди `SCRAM-SHA-256`. Перевірити, що використовується:
> ```javascript
> db.runCommand({ connectionStatus: 1 });
> ```

### Пароль: правила гігієни

- **Не менше 16 символів** для сервісних акаунтів, 20+ для root
- **Жодних словарних слів** — боти підбирають «password», «admin», «qwerty» за секунди
- **Унікальний для кожного сервера** — якщо зламають стейджинг, прод не ляже
- **Зберігайте в секрет-менеджері** (Vault, AWS Secrets Manager, Doppler), не в `.env` у git

```bash
# Генеруємо нормальний пароль
openssl rand -base64 32
# => KjX7pQm9nR2wL8vYhZ4cF6dGsBtNeUiPaE3oX1kM0sA=
```

---

## 2. RBAC: користувачі та ролі

Золоте правило: **кожен додаток — свій користувач з мінімальними правами**. Ніколи не ходіть у прод з-під root.

### Створення користувачів

```javascript
// 1. Root-адмін — лише для обслуговування
use admin;
db.createUser({
  user: "root_admin",
  pwd: passwordPrompt(),  // не пишіть пароль у скрипті
  roles: [{ role: "root", db: "admin" }]
});

// 2. Обліковий запис для бекенду — лише readWrite на своїй базі
use shop;
db.createUser({
  user: "shop_backend",
  pwd: passwordPrompt(),
  roles: [
    { role: "readWrite", db: "shop" }
  ]
});

// 3. Read-only для аналітиків / BI-інструментів
db.createUser({
  user: "analyst",
  pwd: passwordPrompt(),
  roles: [{ role: "read", db: "shop" }]
});

// 4. Моніторинг — лише метрики, нічого не читає з даних
use admin;
db.createUser({
  user: "monitor",
  pwd: passwordPrompt(),
  roles: [
    { role: "clusterMonitor", db: "admin" }
  ]
});
```

### Вбудовані ролі — шпаргалка

**Користувацькі ролі бази:**

| Роль              | Що може                                            |
| ----------------- | -------------------------------------------------- |
| `read`            | Читати дані (крім системних колекцій)              |
| `readWrite`       | Читати і писати                                    |
| `dbAdmin`         | Індекси, схеми, статистика (без даних користувачів) |
| `dbOwner`         | `readWrite` + `dbAdmin` + `userAdmin`              |
| `userAdmin`       | Керувати користувачами і ролями бази               |

**Адмін-ролі кластера:**

| Роль               | Що може                                    |
| ------------------ | ------------------------------------------ |
| `clusterMonitor`   | Читати метрики (для Prometheus, Zabbix)    |
| `clusterManager`   | Керувати реплікацією і шардингом           |
| `hostManager`      | Керувати сервером (shutdown, logRotate)    |
| `clusterAdmin`     | Все про кластер                            |

**Суперролі (обережно!):**

| Роль       | Що може                              |
| ---------- | ------------------------------------ |
| `root`     | Все. Лише для екстрених випадків     |
| `__system` | Внутрішня, ніколи не призначайте юзерам |

**Бекапи:**

| Роль       | Що може                                   |
| ---------- | ----------------------------------------- |
| `backup`   | Читати всі бази для `mongodump`           |
| `restore`  | Писати у всі бази для `mongorestore`      |

### Власні ролі: коли вбудованих замало

Потрібно дати «read-only на колекцію `orders` у базі `shop`, без `users`»? Робимо свою роль:

```javascript
use shop;
db.createRole({
  role: "ordersReader",
  privileges: [
    {
      resource: { db: "shop", collection: "orders" },
      actions: ["find", "listIndexes"]
    }
  ],
  roles: []  // не наслідуємо жодну роль
});

db.grantRolesToUser("analyst", ["ordersReader"]);
```

**Корисні `actions`:**

- `find`, `insert`, `update`, `remove` — CRUD
- `createIndex`, `dropIndex`, `listIndexes` — індекси
- `createCollection`, `dropCollection` — колекції
- `changeStream` — підписуватись на change streams
- `killCursors` — прибирати зависші курсори

> **Pro Tip:** `privileges` підтримує **колекцію-конкретні** права. Наприклад, `readWrite` на `orders`, але `read` на `users`. Це і є принцип найменших привілеїв на практиці.

### Окрема гігієна: View для обмеження даних

Хочете показати аналітику, але без email-ів клієнтів? Зробіть **view** і дайте права лише на неї:

```javascript
db.createView(
  "orders_public",
  "orders",
  [
    {
      $project: {
        userId: 1,
        amount: 1,
        createdAt: 1,
        // email, address, phone — не включаємо
      }
    }
  ]
);

// Роль — лише на view
db.createRole({
  role: "publicOrdersReader",
  privileges: [
    { resource: { db: "shop", collection: "orders_public" }, actions: ["find"] }
  ],
  roles: []
});
```

---

## 3. TLS: шифрування в дорозі

Без TLS паролі, запити й результати летять мережею **відкритим текстом**. Будь-хто з доступом до мережі (sniffer на wi-fi, скомпрометований маршрутизатор, інший pod у тому ж кластері) це бачить.

### Налаштування сервера

```yaml
# mongod.conf
net:
  port: 27017
  bindIp: 127.0.0.1,10.0.0.5
  tls:
    mode: requireTLS
    certificateKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem
    allowConnectionsWithoutCertificates: false
    disabledProtocols: TLS1_0,TLS1_1  # лише TLS 1.2+
```

**Режими `mode`:**

- `disabled` — ніколи (навіть у dev)
- `allowTLS` — приймаємо і TLS, і plaintext — лише для міграції
- `preferTLS` — сервер переходить на TLS, але не вимагає його
- `requireTLS` — **лише TLS**. Єдиний адекватний режим для прод

### Підключення клієнта

```bash
mongosh "mongodb://user:pass@host:27017/shop?tls=true&tlsCAFile=/etc/ssl/ca.pem"
```

Node.js (Mongoose):

```javascript
mongoose.connect("mongodb://host:27017/shop", {
  tls: true,
  tlsCAFile: "/etc/ssl/ca.pem",
  authSource: "admin"
});
```

### mTLS: клієнт теж пред'являє сертифікат

У сценарії сервіс-до-сервісу (мікросервіси, K8s) — не покладайтесь лише на пароль. Дайте кожному сервісу свій клієнтський сертифікат:

```yaml
net:
  tls:
    mode: requireTLS
    certificateKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem
    clusterFile: /etc/ssl/cluster.pem   # для внутрішньокластерного TLS
```

І юзер автентифікується по сертифікату:

```javascript
use $external;
db.createUser({
  user: "CN=shop-backend,OU=services,O=MyCompany",
  roles: [{ role: "readWrite", db: "shop" }]
});
```

> **Pro Tip:** Автоматизуйте ротацію сертифікатів — **cert-manager** у Kubernetes, **Let's Encrypt** для публічних, **Vault PKI** для внутрішніх. Сертифікат, що не ротується, — це час-бомба.

---

## 4. Шифрування на диску (Encryption at Rest)

Питання: «що буде, якщо хтось вкраде наш жорсткий диск або бекап-архів?». Якщо відповідь — «отримає всі наші дані» — у вас проблема.

### Варіанти

**1. WiredTiger Encryption (Enterprise / Atlas)**

Вбудоване AES-256 шифрування сторінок даних. Ключі — через KMIP, AWS KMS, GCP KMS, Azure Key Vault.

```yaml
security:
  enableEncryption: true
  encryptionCipherMode: AES256-GCM
  kmip:
    serverName: kmip.example.com
    port: 5696
    clientCertificateFile: /etc/ssl/client.pem
```

**2. Повне шифрування диску (Community)**

- Linux: **LUKS** (`cryptsetup`)
- macOS: **FileVault**
- AWS EBS: **encryption: true** при створенні тому
- GCP Persistent Disk: шифрується автоматично

Це **прозоро** для MongoDB — вона не знає, що диск зашифрований. Мінус: якщо сервер запущений і розблокований, дані доступні звичайним шляхом.

**3. Client-Side Field Level Encryption (CSFLE)**

Найцікавіше: шифрування **окремих полів у самому додатку**, **до того як** дані долетять до БД. Адмін БД **фізично не може** прочитати такі поля.

```javascript
// Ви бачите в консолі:
{
  _id: ObjectId("..."),
  name: "Олена",
  email: BinData(6, "AREjRWWoy0..."),     // зашифровано
  ssn: BinData(6, "AREjRY8H5a...")        // зашифровано
}
```

Node.js приклад з автоматичним CSFLE:

```javascript
const { MongoClient } = require("mongodb");

const kmsProviders = {
  aws: { accessKeyId: "...", secretAccessKey: "..." }
};

const schemaMap = {
  "shop.users": {
    bsonType: "object",
    encryptMetadata: {
      keyId: [UUID("...")]
    },
    properties: {
      ssn: {
        encrypt: {
          bsonType: "string",
          algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic"
          // Deterministic — можна шукати по точному співпадінню
          // Random — не можна шукати, але криптографічно сильніше
        }
      },
      email: {
        encrypt: {
          bsonType: "string",
          algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic"
        }
      }
    }
  }
};

const client = new MongoClient(uri, {
  autoEncryption: {
    keyVaultNamespace: "encryption.__keyVault",
    kmsProviders,
    schemaMap
  }
});
```

Два режими:

- **Deterministic** — однаковий plaintext дає однаковий ciphertext. Можна шукати `findOne({ email: ... })` і будувати індекс. Слабший криптографічно
- **Random** — кожного разу новий ciphertext. Ні пошуку, ні індексу. Максимальна безпека

**4. Queryable Encryption (з 7.0)**

Новий механізм: шифрування з можливістю робити **range-запити** без розшифрування. Ідеально для GDPR-чутливих полів типу дат, сум, віку.

```javascript
// Шукаємо людей віком 25-35, не розшифровуючи age на сервері!
db.users.find({ age: { $gte: 25, $lte: 35 } });
```

> **Чому це важливо?** GDPR (ЄС) і закон України «Про захист персональних даних» вимагають «розумних технічних заходів». CSFLE — один із найсильніших аргументів у разі перевірки чи інциденту: «навіть із повним доступом до БД зловмисник нічого не прочитав».

---

## 5. Мережева ізоляція

Найкраща «безпека» — коли атакуючий просто **не може досягти** бази.

### Правила

- **Не виставляйте 27017 у публічний інтернет.** Ніколи
- **Bind лише на потрібні інтерфейси.** Якщо БД і додаток на одній машині — `bindIp: 127.0.0.1`
- **Приватна мережа / VPC.** У хмарі поставте БД у private subnet без публічного IP
- **Firewall / Security Group.** Дозвольте вхідний трафік на 27017 **лише з IP бекенду**
- **VPN / Bastion для адміністрування.** Не відкривайте порт для вашого офісу — налаштуйте VPN

```yaml
# mongod.conf
net:
  bindIp: 127.0.0.1,10.0.0.5
  port: 27017
```

### Приклад AWS Security Group

```
Inbound:
  - 27017/TCP from sg-backend        (лише бекенд-EC2)
  - 27017/TCP from 10.0.0.0/24       (внутрішня мережа)
  - (НЕМАЄ) 27017/TCP from 0.0.0.0/0 (це катастрофа)
```

### MongoDB у Kubernetes

- `ClusterIP` сервіс, **не** `LoadBalancer`
- `NetworkPolicy`, яка пускає трафік лише від namespace бекенду
- Секрети — через `Secret`-ресурси (краще — External Secrets Operator + Vault)

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: mongo-allow-backend
spec:
  podSelector:
    matchLabels: { app: mongo }
  policyTypes: [Ingress]
  ingress:
    - from:
        - podSelector:
            matchLabels: { app: backend }
      ports:
        - protocol: TCP
          port: 27017
```

---

## 6. Auditing: хто і що робив

Колись щось пішло не так, і ви хочете зрозуміти **хто** це зробив і **коли**. Без audit log — нічого.

### Enterprise audit

```yaml
auditLog:
  destination: file
  format: JSON
  path: /var/log/mongodb/audit.json
  filter: '{ atype: { $in: ["authenticate", "createUser", "dropDatabase", "dropCollection"] } }'
```

Кожна подія — структурований запис з часом, користувачем, командою, результатом. Збирайте у SIEM (Splunk, Elastic, Datadog) і ставте алерти на підозрілі дії:

- **Логіни з нових IP**
- **Створення користувачів** у неробочий час
- **`dropDatabase` / `dropCollection`** у прод
- **Велика кількість `find`** від одного юзера (можливо, експфільтрація)

### Community: що можна

- **Логи рівня `verbose`** (`systemLog.verbosity: 1`) — пишуть команди, але багато шуму
- **Proxy перед Mongo** (наприклад, [mongoproxy](https://github.com/FiloSottile/mongoproxy)), який логує запити
- **Network flow logs** (VPC flow logs у хмарі) — хто підключався

> **Pro Tip:** Навіть без Enterprise робіть хоча б примітивний аудит: log-пайплайн з `systemLog`, алерт на появу нових користувачів у `db.system.users`, регулярний звіт по ролям.

---

## 7. NoSQL Injection: так, це реально

Думаєте, без SQL немає injection? Класика жанру:

```javascript
// Небезпечно: приймаємо від користувача об'єкт
app.post("/login", (req, res) => {
  db.users.findOne({
    username: req.body.username,
    password: req.body.password
  });
});
```

Зловмисник надсилає JSON:

```json
{ "username": "admin", "password": { "$ne": null } }
```

Запит стає `{ username: "admin", password: { $ne: null } }` — знайде адміна **без пароля**.

### Інші вектори

**1. `$where` із user input**

```javascript
// КАТАСТРОФА: JS-код виконується на сервері БД
db.users.find({ $where: `this.username === "${req.body.username}"` });
// username = '"; return true; //' → поверне всіх
```

**Правило:** `$where` не повинен приймати user input. Взагалі. Краще — вимкніть його: `security.javascriptEnabled: false`.

**2. Оператори в ключах**

```javascript
// Якщо ви дозволяєте користувачу будувати фільтр —
// він може передати { "$gt": "" } як ключ
req.body.filter = { "name": { "$regex": ".*" } }; // regex DoS, бере ресурси
```

**3. Regex DoS**

Зловмисник шле `{ name: "(a+)+$" }` — regex зависає на багато секунд, завантажуючи CPU.

**4. Агрегаційна injection**

`$lookup`, `$out`, `$merge` у стадії з user input → можна переписати іншу колекцію.

### Як захиститись

**1. Перевіряйте типи вхідних даних**

```javascript
// Безпечно
const username = String(req.body.username);
const password = String(req.body.password);
db.users.findOne({ username, password });
```

**2. Валідуйте схемами**

```javascript
import { z } from "zod";

const LoginSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(8).max(100)
});

app.post("/login", async (req, res) => {
  const { username, password } = LoginSchema.parse(req.body);
  // Тепер точно рядки — не об'єкти, не regex
  const user = await db.users.findOne({ username, password });
});
```

Альтернативи: **Joi**, **Yup**, **class-validator**, **AJV**.

**3. Використовуйте санітайзери**

```javascript
// express-mongo-sanitize — викидає ключі, що починаються з $ або містять .
import mongoSanitize from "express-mongo-sanitize";
app.use(mongoSanitize());
```

**4. Параметризуйте regex**

```javascript
// НЕ робіть так
db.users.find({ name: new RegExp(req.query.q) });

// А так
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
db.users.find({
  name: new RegExp(escapeRegex(req.query.q), "i")
});
```

**5. Вимкніть JS на сервері**

```yaml
security:
  javascriptEnabled: false
```

Це відключить `$where` і `mapReduce` з функціями. У 99% додатків не потрібні, а атак — мінус одна велика.

**6. Принцип найменших привілеїв** (повертаємось до RBAC)

Якщо ваш юзер для додатку має лише `find` і `insertOne` на `orders` — навіть успішна injection не дозволить `dropDatabase`.

> **Поширена помилка:** Express без перевірки типів + прямий прокид `req.body` у Mongo — класичний рецепт NoSQL injection. Завжди валідуйте вхід. Завжди.

---

## 8. Бекапи: ваша остання лінія оборони

Безпека — це не лише «не пустити». Це ще й «відновитись після інциденту». Ransomware може зашифрувати прод. Розробник може випадково зробити `deleteMany({})`. Диск може згоріти. Бекап — це не опція, це реанімація.

### Типи бекапів

**1. `mongodump` / `mongorestore`**

Логічний бекап. Експортує BSON + метадані.

```bash
mongodump --uri="mongodb://user:pass@host/shop" \
  --archive=/backup/shop-$(date +%F).gz --gzip

mongorestore --uri="..." --archive=/backup/shop-2026-04-15.gz --gzip
```

- **+** Переносний між версіями
- **−** Повільний для великих баз, не консистентний між колекціями

**2. Snapshot файлової системи**

EBS snapshot, LVM snapshot, ZFS snapshot — миттєвий знімок диску.

- **+** Швидко, консистентно (якщо зробити `fsyncLock`)
- **−** Залежить від інфраструктури

**3. Replica snapshot**

Зупиніть secondary, зробіть snapshot диску, підніміть назад. Primary працює без перерв.

**4. Point-in-Time Recovery (PITR)**

Снапшот + oplog → можна відновитись на конкретну секунду («за 5 хв до того, як стажер все видалив»).

Доступно в **Atlas**, **Ops Manager**, або через сторонні рішення (Percona Backup).

### Правило 3-2-1

- **3** копії даних
- На **2** різних носіях
- **1** поза майданчиком (інший регіон, інший провайдер)

### Золоті правила бекапів

- **Шифруйте бекап.** Завжди. `gpg`, AWS KMS, age — що завгодно, але не plaintext
- **Обмежте доступ.** Тільки роль `backup`, окремі creds, окремий IAM-user
- **Тестуйте відновлення.** «Ми маємо бекапи» ≠ «ми можемо відновитись». Раз на квартал — тренування
- **Офлайн-копія.** Якщо ransomware зашифрує все ваше онлайн-сховище, офлайн-стрічка рятує
- **Ротація.** Зберігайте кілька поколінь: щоденні за тиждень, тижневі за місяць, місячні за рік

> **Поширена помилка:** Бекап у той самий акаунт AWS, де продакшн. Хтось ламає акаунт — бекапи йдуть разом з прод. Тримайте бекапи в **окремому акаунті / організації** з жорсткими IAM-політиками.

---

## 9. Секрети й конфіг: де зберігати креденшіали

Ваш connection string з паролем — це ключ від королівства. Не поводьтеся з ним як зі шматком тексту.

### Не робіть так

```javascript
// ❌ Хардкод у коді
mongoose.connect("mongodb://admin:Pass1234@prod:27017");

// ❌ .env у git
// .env
// MONGO_URI=mongodb://admin:Pass1234@prod:27017
// ...і .env у commit
```

### Робіть так

- **Секрет-менеджер:** HashiCorp Vault, AWS Secrets Manager, GCP Secret Manager, Azure Key Vault, Doppler
- **Injection під час запуску:** контейнер отримує змінні з секрет-менеджера при старті
- **Ротація:** регулярно перевипускайте паролі — автоматично
- **Аудит доступу:** хто, коли і для чого читав секрет

```bash
# AWS приклад
export MONGO_URI=$(aws secretsmanager get-secret-value \
  --secret-id prod/mongo --query SecretString --output text)
node server.js
```

### Префлайт-чек перед пушем у git

- `git secrets` або `gitleaks` у pre-commit hook
- `.gitignore` для `.env*`, `*.pem`, `*.key`
- GitHub push protection (секрет сканер)

> **Pro Tip:** Якщо ви колись випадково запушили пароль — не просто видаляйте комміт. **Негайно ротуйте пароль**. Git history вічна, а боти сканують публічні репо в реальному часі.

---

## 10. Продакшн-конфіг: що реально вмикати

Мінімальний production-ready `mongod.conf`:

```yaml
net:
  port: 27017
  bindIp: 127.0.0.1,10.0.0.5
  tls:
    mode: requireTLS
    certificateKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem
    disabledProtocols: TLS1_0,TLS1_1
  maxIncomingConnections: 5000  # захист від connection flood

security:
  authorization: enabled
  javascriptEnabled: false  # вимикаємо $where, mapReduce з JS
  clusterAuthMode: x509     # mTLS між вузлами replica set

setParameter:
  authenticationMechanisms: SCRAM-SHA-256
  enableLocalhostAuthBypass: false

storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true  # важливо для durability

systemLog:
  destination: file
  path: /var/log/mongodb/mongod.log
  logAppend: true
  verbosity: 0

processManagement:
  fork: true
  pidFilePath: /var/run/mongodb/mongod.pid

operationProfiling:
  slowOpThresholdMs: 100  # логуємо повільні запити (потенційна DoS)
```

---

## 11. Rate limiting і захист від DoS

MongoDB сама не вміє rate-limit на рівні користувача. Вирішуйте це шарами вище:

- **На рівні додатку:** `express-rate-limit`, `fastify-rate-limit`, middleware з Redis
- **На рівні LB:** CloudFlare, AWS WAF, nginx `limit_req`
- **На рівні Mongo:** `maxIncomingConnections`, `maxTimeMS` у запитах

```javascript
// Обмежуємо час виконання — захист від regex DoS та «важких» агрегацій
db.users.find({ name: /.../ }).maxTimeMS(2000);

// На рівні агрегації
db.orders.aggregate([...], { maxTimeMS: 5000 });
```

> **Pro Tip:** Налаштуйте алерт на аномально довгі запити через `db.currentOp({ secs_running: { $gt: 10 } })`. Можливо, це не баг, а атака.

---

## 12. Чекліст безпеки: перед продакшном

### Обов'язковий мінімум

- [ ] `authorization: enabled`
- [ ] Root-пароль — 20+ символів, унікальний
- [ ] Кожен додаток — свій користувач з **мінімальними** ролями
- [ ] Порт 27017 не доступний з публічного інтернету
- [ ] `bindIp` — лише на потрібні інтерфейси
- [ ] TLS `requireTLS` + сучасні протоколи (TLS 1.2+)
- [ ] Валідація і типізація вхідних даних перед запитами
- [ ] Бекапи налаштовані і **тестувались** на відновлення
- [ ] Секрети — в secret manager, не в git

### Сильно рекомендовано

- [ ] mTLS між вузлами replica set (`clusterAuthMode: x509`)
- [ ] `javascriptEnabled: false`
- [ ] CSFLE для персональних даних (GDPR / закон про ПД)
- [ ] Шифрування на диску (WiredTiger або LUKS/EBS)
- [ ] Audit log (Enterprise) або замінник (proxy / flow logs)
- [ ] Моніторинг аномалій: логіни, створення юзерів, масові `find`
- [ ] Ротація паролів і сертифікатів за розкладом
- [ ] Захищений admin-доступ через VPN/Bastion

### Enterprise / зрілий проєкт

- [ ] KMS-інтеграція (AWS KMS, HashiCorp Vault) для ключів CSFLE
- [ ] Queryable Encryption для чутливих range-полів
- [ ] SIEM-інтеграція (Splunk, Elastic, Datadog) для audit log
- [ ] Incident response playbook (що робимо, коли все впало)
- [ ] Regular penetration testing
- [ ] Окремий AWS-акаунт / GCP-проєкт для prod з окремими IAM

---

## Що читати далі

- **[MongoDB Security Checklist](https://www.mongodb.com/docs/manual/administration/security-checklist/)** — офіційний
- **[OWASP NoSQL Injection](https://owasp.org/www-community/Injection_Flaws)** — класика
- **[CIS MongoDB Benchmark](https://www.cisecurity.org/benchmark/mongodb)** — hardening-гайд від CIS
- **MongoDB University → M150 Authentication and Authorization** — безкоштовний курс

---

## Підсумок

Безпека — не «фіча, яку колись додамо». Це **базовий шар**, про який ви думаєте з першого дня проєкту.

Правило шарів:

1. **Мережа** — хай атакуючий навіть не побачить порт
2. **Автентифікація** — якщо побачив, хай не зможе зайти
3. **Авторизація (RBAC)** — якщо зайшов, хай не може більше, ніж потрібно
4. **TLS** — те, що він бачить у мережі, нехай буде шифровкою
5. **Шифрування на диску / CSFLE** — якщо все ж украв бекап, хай нічого не прочитає
6. **Audit + моніторинг** — знайте, коли щось не так
7. **Бекапи** — якщо найгірше сталось, зможете повернутись

Найдешевші й найефективніші з цих шарів — **мережева ізоляція, авторизація і бекапи**. Без них — не запускайтесь у прод. Взагалі.
