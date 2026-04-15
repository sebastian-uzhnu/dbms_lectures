# MongoDB: Документи, Агрегації та Безпека

## Знайомтесь — найпопулярніша NoSQL база

Якщо Postgres — це швейцарський ніж, а MySQL — надійний шкаф з полицями, то **MongoDB — це велика розумна коробка**, в яку можна кидати документи будь-якої форми, а вона потім миттєво знайде той, що вам потрібен.

У реляційних базах ви спочатку малюєте схему: таблиці, колонки, типи, зв'язки. У MongoDB ви просто берете JSON-об'єкт і кажете: «збережи». Все.

> **Аналогія:** Уявіть шухляду з документами. У Postgres кожен документ має бути на офіційному бланку з фіксованими полями. У MongoDB кожен документ може виглядати як хоче — головне, щоб ви могли його знайти.

### Коли MongoDB — це правильний вибір?

- **Дані мають нерегулярну структуру** — у товарів різні характеристики (у ноутбука є RAM, у футболки — розмір)
- **Швидкий прототип** — ви ще не знаєте, якою буде схема
- **Багато читання по ID документа** — каталоги, профілі, статті
- **Вкладені дані природно тримаються разом** — пост і його коментарі, замовлення і його товари
- **Горизонтальне масштабування** — шардинг «з коробки»

### Коли краще взяти щось інше?

- Вам критичні складні `JOIN`-и між багатьма таблицями
- У вас багато транзакцій з суворими ACID-гарантіями
- Ваші дані добре лягають у таблиці й там і залишаться

> **Pro Tip:** «NoSQL» не означає «без схеми». Це означає «схема у вашій голові (або в коді додатку)». Якщо ви її не спроєктували — ви отримаєте хаос за півроку.

---

## Основні поняття: що з чим їсти

Порівняння з реляційним світом — найшвидший спосіб зрозуміти MongoDB:

| Реляційна БД          | MongoDB              |
| --------------------- | -------------------- |
| Database              | Database             |
| Table                 | Collection           |
| Row                   | Document             |
| Column                | Field                |
| Index                 | Index                |
| JOIN                  | `$lookup` або вкладені документи |
| Primary Key           | `_id` (автоматично)  |

### Документ — це JSON (майже)

Насправді — це **BSON** (Binary JSON). Це той самий JSON, але з додатковими типами: `ObjectId`, `Date`, `Decimal128`, бінарні дані. Розмір одного документа — до 16 МБ.

```javascript
{
  _id: ObjectId("6612a1f4e1b2c3d4e5f60001"),
  name: "Олена Коваленко",
  email: "olena@example.com",
  age: 27,
  tags: ["frontend", "react"],
  address: {
    city: "Київ",
    street: "Хрещатик, 22"
  },
  createdAt: ISODate("2026-04-15T10:30:00Z")
}
```

> **Аналогія:** Якщо SQL-рядок — це анкета з фіксованими графами, то MongoDB-документ — це папка, в яку можна складати що завгодно: і текст, і списки, і вкладені папки.

---

## Швидкий старт у Docker

```bash
docker run --name my-mongo \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=mysecretpassword \
  -v mongo_data:/data/db \
  -d \
  -p 27017:27017 \
  mongo:7
```

**Що відбувається:**

- `MONGO_INITDB_ROOT_USERNAME/PASSWORD` — створює адмін-користувача (без цього авторизація взагалі не вмикається)
- `-v mongo_data:/data/db` — том для даних, щоб вони не зникли після перезапуску
- `mongo:7` — сучасна стабільна версія

Підключитись до shell:

```bash
docker exec -it my-mongo mongosh -u admin -p mysecretpassword
```

> **Pro Tip:** Для зручної роботи з даними поставте **MongoDB Compass** — це як DBeaver для Mongo. А ще є **Studio 3T** для складніших задач.

---

## CRUD: створити, прочитати, оновити, видалити

### Створюємо базу і колекцію

```javascript
use shop;  // Перемикаємось на базу shop (створиться автоматично при першому вставленні)
```

### Insert — додаємо документи

```javascript
// Один документ
db.products.insertOne({
  name: "Ноутбук Lenovo",
  price: 25000,
  stock: 12,
  tags: ["електроніка", "комп'ютери"]
});

// Багато документів
db.products.insertMany([
  { name: "Мишка", price: 450, stock: 100 },
  { name: "Клавіатура", price: 1200, stock: 40 }
]);
```

> **Pro Tip:** Поле `_id` створиться автоматично як `ObjectId`. Але ви можете задати своє — головне, щоб воно було унікальне.

### Find — читаємо дані

```javascript
// Всі документи
db.products.find();

// Один документ за умовою
db.products.findOne({ name: "Мишка" });

// З фільтром
db.products.find({ price: { $lt: 1000 } });  // ціна менша за 1000

// З проєкцією (лише потрібні поля)
db.products.find(
  { stock: { $gt: 0 } },
  { name: 1, price: 1, _id: 0 }  // 1 = показати, 0 = приховати
);
```

**Оператори порівняння:**

| Оператор | Значення           | Приклад                         |
| -------- | ------------------ | ------------------------------- |
| `$eq`    | дорівнює           | `{ age: { $eq: 25 } }`          |
| `$ne`    | не дорівнює        | `{ status: { $ne: "banned" } }` |
| `$gt`    | більше             | `{ price: { $gt: 100 } }`       |
| `$gte`   | більше або дорівнює | `{ age: { $gte: 18 } }`         |
| `$lt`    | менше              | `{ stock: { $lt: 10 } }`        |
| `$lte`   | менше або дорівнює | `{ rating: { $lte: 3 } }`      |
| `$in`    | у списку           | `{ city: { $in: ["Київ", "Львів"] } }` |
| `$nin`   | не у списку        | `{ tag: { $nin: ["spam"] } }`   |

**Логічні оператори:**

```javascript
// AND (за замовчуванням — всі умови на одному рівні об'єднуються через AND)
db.products.find({ price: { $gt: 100 }, stock: { $gt: 0 } });

// OR
db.products.find({
  $or: [
    { price: { $lt: 500 } },
    { tags: "знижка" }
  ]
});

// NOT
db.products.find({ price: { $not: { $gt: 1000 } } });
```

### Update — змінюємо дані

```javascript
// Оновити одне поле
db.products.updateOne(
  { name: "Мишка" },
  { $set: { price: 399 } }
);

// Збільшити число
db.products.updateOne(
  { name: "Мишка" },
  { $inc: { stock: -1 } }  // мінус 1 штука зі складу
);

// Додати в масив
db.products.updateOne(
  { name: "Мишка" },
  { $push: { tags: "акція" } }
);

// Оновити багато документів
db.products.updateMany(
  { stock: 0 },
  { $set: { available: false } }
);
```

> **Поширена помилка:** `updateOne({ name: "Мишка" }, { price: 399 })` — без `$set` це **замінить весь документ**, залишивши лише поле `price`. Завжди використовуйте `$set`, `$inc`, `$push` тощо.

**Корисні update-оператори:**

- `$set` — встановити значення
- `$unset` — видалити поле
- `$inc` — збільшити/зменшити число
- `$push` / `$pull` — додати/видалити з масиву
- `$addToSet` — додати в масив, якщо там ще немає

### Delete — видаляємо

```javascript
db.products.deleteOne({ name: "Мишка" });
db.products.deleteMany({ stock: 0 });
```

> **Поширена помилка:** `db.products.deleteMany({})` — видалить **всі документи** в колекції. Будьте обережні з порожнім фільтром.

---

## Індекси: швидкість без магії

Без індексу MongoDB робить **COLLSCAN** — читає кожен документ. З індексом — **IXSCAN** по дереву.

> **Аналогія:** Шукати «Коваленко» у телефонній книзі без алфавітного покажчика — це перегортати всі 500 сторінок. З покажчиком — одразу на літеру «К».

### Типи індексів

```javascript
// Звичайний
db.users.createIndex({ email: 1 });  // 1 = ASC, -1 = DESC

// Унікальний
db.users.createIndex({ email: 1 }, { unique: true });

// Складений (compound)
db.orders.createIndex({ userId: 1, createdAt: -1 });

// Текстовий (для повнотекстового пошуку)
db.articles.createIndex({ title: "text", body: "text" });

// TTL — автоматично видаляє документи через N секунд
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });

// Частковий індекс — лише для документів за умовою
db.users.createIndex(
  { email: 1 },
  { partialFilterExpression: { active: true } }
);
```

**Перевірити, чи використовується індекс:**

```javascript
db.users.find({ email: "olena@example.com" }).explain("executionStats");
```

Шукайте в плані: `"stage": "IXSCAN"` — добре, `"COLLSCAN"` — треба індекс.

> **Pro Tip:** Складений індекс `{ userId: 1, createdAt: -1 }` працює і для запиту `{ userId: ... }`, але **не** для запиту лише по `createdAt`. Правило «лівого префіксу» — як у MySQL.

> **Поширена помилка:** Навішати індекси на всі поля «про всяк випадок». Кожен індекс уповільнює запис і з'їдає пам'ять. Індексуйте те, по чому реально шукаєте.

---

## Aggregation Framework: серце MongoDB

Це найпотужніша фіча Mongo. Якщо `find()` — це простий пошук, то **агрегація — це конвеєр трансформацій**, де дані проходять через послідовні стадії.

> **Аналогія:** Уявіть сортувальний конвеєр на пошті. Лист заходить, його зважують (стадія 1), сортують за регіоном (стадія 2), кладуть у мішок (стадія 3). Кожна стадія щось робить з даними і передає далі.

### Базовий синтаксис

```javascript
db.collection.aggregate([
  { $stage1: { ... } },
  { $stage2: { ... } },
  { $stage3: { ... } }
]);
```

### Ключові стадії

#### `$match` — фільтр (аналог `WHERE`)

```javascript
db.orders.aggregate([
  { $match: { status: "completed" } }
]);
```

> **Pro Tip:** Ставте `$match` на самому початку — менше даних проходить крізь пайплайн, швидше працює і може використати індекс.

#### `$project` — вибираємо і перетворюємо поля (аналог `SELECT`)

```javascript
db.users.aggregate([
  {
    $project: {
      _id: 0,
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      isAdult: { $gte: ["$age", 18] }
    }
  }
]);
```

#### `$group` — групування (аналог `GROUP BY`)

```javascript
// Скільки замовлень і на яку суму зробив кожен користувач
db.orders.aggregate([
  {
    $group: {
      _id: "$userId",
      totalOrders: { $sum: 1 },
      totalAmount: { $sum: "$amount" },
      avgAmount: { $avg: "$amount" },
      maxOrder: { $max: "$amount" }
    }
  }
]);
```

**Результат:**

```
{ _id: ObjectId("..."), totalOrders: 5, totalAmount: 12500, avgAmount: 2500, maxOrder: 8000 }
```

Акумулятори: `$sum`, `$avg`, `$min`, `$max`, `$first`, `$last`, `$push` (у масив), `$addToSet` (унікальні в масив).

#### `$sort`, `$limit`, `$skip` — сортування і пагінація

```javascript
db.products.aggregate([
  { $sort: { price: -1 } },  // найдорожчі спочатку
  { $skip: 20 },
  { $limit: 10 }
]);
```

#### `$lookup` — JOIN у MongoDB

```javascript
// Замовлення з даними про користувача
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  { $unwind: "$user" }  // розгорнути масив в об'єкт
]);
```

> **Аналогія:** `$lookup` — це як піти в сусідню кімнату і принести папку з ім'ям клієнта, щоб прикласти її до замовлення.

> **Поширена помилка:** Робити `$lookup` на великих колекціях без індексу на `foreignField`. Це буде повільно. Перевіряйте індекси!

#### `$unwind` — розгорнути масив

```javascript
// Якщо у товара є tags: ["акція", "нове", "топ"],
// $unwind створить 3 документи — по одному на кожен тег
db.products.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", count: { $sum: 1 } } }
]);
```

#### `$addFields` / `$set` — додати обчислені поля

```javascript
db.orders.aggregate([
  {
    $addFields: {
      totalWithTax: { $multiply: ["$amount", 1.2] }
    }
  }
]);
```

#### `$facet` — кілька пайплайнів паралельно

Це справжня магія — в одному запиті отримати кілька різних звітів:

```javascript
db.products.aggregate([
  {
    $facet: {
      byCategory: [
        { $group: { _id: "$category", count: { $sum: 1 } } }
      ],
      priceRanges: [
        {
          $bucket: {
            groupBy: "$price",
            boundaries: [0, 500, 2000, 10000, 100000],
            default: "Інше",
            output: { count: { $sum: 1 } }
          }
        }
      ],
      top5Expensive: [
        { $sort: { price: -1 } },
        { $limit: 5 }
      ]
    }
  }
]);
```

### Реальний приклад: звіт по продажах

Уявіть, що у нас є замовлення, і ми хочемо отримати **топ-5 користувачів за витратами за останній місяць**, разом з їхніми іменами.

```javascript
db.orders.aggregate([
  // 1. Лише успішні замовлення за останні 30 днів
  {
    $match: {
      status: "completed",
      createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    }
  },
  // 2. Групуємо по користувачу
  {
    $group: {
      _id: "$userId",
      totalSpent: { $sum: "$amount" },
      orderCount: { $sum: 1 }
    }
  },
  // 3. Топ-5 за сумою
  { $sort: { totalSpent: -1 } },
  { $limit: 5 },
  // 4. Підтягуємо дані користувача
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  // 5. Фінальний вигляд
  {
    $project: {
      _id: 0,
      name: "$user.name",
      email: "$user.email",
      totalSpent: 1,
      orderCount: 1
    }
  }
]);
```

> **Pro Tip:** Читайте пайплайн як рецепт зверху вниз — кожна стадія має чіткий вхід і вихід. Якщо складно — розбийте на шматки і дивіться результат кожної стадії окремо.

### `$bucket` і `$bucketAuto` — гістограми

```javascript
// Розподіл клієнтів за віком
db.users.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [0, 18, 25, 35, 50, 100],
      default: "Unknown",
      output: { count: { $sum: 1 } }
    }
  }
]);
```

### `$graphLookup` — рекурсивні запити

Ідеально для ієрархій: підпорядкованість співробітників, коментарі-відповіді, категорії-підкатегорії.

```javascript
db.employees.aggregate([
  { $match: { name: "Максим" } },
  {
    $graphLookup: {
      from: "employees",
      startWith: "$_id",
      connectFromField: "_id",
      connectToField: "managerId",
      as: "subordinates"
    }
  }
]);
```

---

## Транзакції: так, вони є

З версії 4.0 MongoDB підтримує повноцінні ACID-транзакції (потрібен replica set — один вузол теж рахується).

```javascript
const session = db.getMongo().startSession();
session.startTransaction();

try {
  const users = session.getDatabase("shop").users;
  const orders = session.getDatabase("shop").orders;

  users.updateOne({ _id: userId }, { $inc: { balance: -100 } });
  orders.insertOne({ userId, amount: 100, status: "pending" });

  session.commitTransaction();
} catch (e) {
  session.abortTransaction();
  throw e;
} finally {
  session.endSession();
}
```

> **Pro Tip:** Транзакції в Mongo — штука важча, ніж у Postgres, і повільніша. Якщо ви можете спроєктувати дані так, щоб оновлювати один документ атомарно (бо документ у Mongo оновлюється атомарно «з коробки») — зробіть так.

---

## Change Streams: реагуємо на зміни

Це потік подій про зміни в колекції — ідеально для real-time додатків.

```javascript
const changeStream = db.orders.watch([
  { $match: { "fullDocument.status": "completed" } }
]);

changeStream.on("change", (change) => {
  console.log("Нове замовлення:", change.fullDocument);
  // надіслати email, push-нотифікацію, оновити UI через WebSocket
});
```

> **Реальний приклад:** Чат-додаток: кожне нове повідомлення потрапляє в колекцію, change stream ловить це і пушить клієнтам через WebSocket.

---

## Схеми: як не втратити голову

MongoDB гнучка, але **гнучкість — це відповідальність**. Щоб не перетворити базу на смітник:

### 1. Використовуйте валідацію на рівні колекції

```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "name", "createdAt"],
      properties: {
        email: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$"
        },
        name: { bsonType: "string", minLength: 2 },
        age: { bsonType: "int", minimum: 0, maximum: 150 },
        createdAt: { bsonType: "date" }
      }
    }
  },
  validationLevel: "strict"
});
```

### 2. Embed vs Reference — коли вкладати, а коли посилатись

**Вкладайте (embed),** коли:

- Дані завжди читаються разом (пост + його теги)
- Вкладений об'єкт не існує без батьківського (адреса користувача)
- Масив не росте нескінченно

**Посилайтесь (reference),** коли:

- Дані переюзаються багатьма документами (автор багатьох постів)
- Вкладені дані зростають без ліміту (коментарі до популярного поста)
- Треба запитувати вкладені дані окремо

> **Pro Tip:** Правило 16 МБ. Один документ не може бути більшим за 16 МБ. Якщо ваш масив коментарів росте — виносьте в окрему колекцію.

### 3. Patterns: Bucket, Outlier, Computed

Це окрема велика тема — у MongoDB є офіційні [patterns](https://www.mongodb.com/blog/post/building-with-patterns-a-summary). Найкорисніші:

- **Bucket** — групувати дані по часових вікнах (IoT, метрики)
- **Computed** — зберігати заздалегідь пораховані агрегати
- **Extended Reference** — дублювати частину даних, щоб уникати `$lookup`

---

## Безпека MongoDB

Безпека — окрема велика тема, тому ми винесли її в [окрему лекцію про безпеку MongoDB](/lecture_mongodb_security). Там про авторизацію, ролі, TLS, шифрування, NoSQL injection і чекліст перед продакшном.

---

## Реплікація і шардинг (коротко)

### Replica Set — надійність

Три (або більше) вузли: один **primary** (приймає запис), інші **secondary** (копіюють дані). Якщо primary помирає — secondary автоматично обирають нового.

> **Аналогія:** Три бухгалтери ведуть однакову книгу. Головний диктує, двоє переписують. Якщо головний захворів — один із двох стає головним.

**Для чого:**

- Висока доступність (High Availability)
- Читання можна розподілити на secondary (read preference)
- Бекап з secondary — не навантажує primary

### Sharding — масштабування

Дані розрізаються на шматки (**shards**) за **shard key**. Кожен шард — це свій replica set.

> **Аналогія:** Замість одного величезного складу у вас 10 складів в різних містах. Товари з Києва — в Київ, зі Львова — у Львів.

**Коли потрібен шардинг:**

- Дані більше не вміщуються на один сервер
- Запис став вузьким місцем
- У вас терабайти даних і тисячі RPS

> **Pro Tip:** Шардинг — це серйозно і складно. Поки вам вистачає одного сервера — **не шардуйте**. 90% проєктів ніколи не дійдуть до цієї точки.

---

## Quick Check: самоперевірка

Спробуйте відповісти, не підглядаючи:

1. Чим відрізняється `updateOne({...}, {price: 500})` від `updateOne({...}, {$set: {price: 500}})`?
2. Який стадії краще ставити якнайраніше в агрегації і чому?
3. Коли краще вкладати коментарі в документ поста, а коли — виносити в окрему колекцію?
4. Як захиститись від NoSQL injection?
5. Що таке `_id` і хто його генерує?

---

## Що читати далі

- **MongoDB University** ([learn.mongodb.com](https://learn.mongodb.com)) — офіційні безкоштовні курси
- **MongoDB Docs → Aggregation** — найкраща документація з прикладами
- **Building with Patterns** — серія статей про data modeling patterns
- **OWASP NoSQL Injection** — глибше про безпеку

---

## Підсумок

MongoDB — це потужний інструмент, коли ваші дані природно документні, а схема гнучка. Але **гнучкість без дисципліни перетворюється на хаос**: проєктуйте схему, валідуйте вхід, використовуйте індекси, думайте про безпеку з першого дня.

Агрегаційний фреймворк — це ваш найкращий друг для аналітики й звітів. Вкладіть час у його вивчення, і ви будете розв'язувати задачі, які в SQL вимагають страшних підзапитів, одним красивим пайплайном.

І пам'ятайте: найбезпечніша база — це та, яку атакуючий не може досягти. Починайте з мережевої ізоляції, а вже потім шаруйте рівні захисту.
