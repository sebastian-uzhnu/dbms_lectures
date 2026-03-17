# Привіт, PostgreSQL! Основи, Оператори та трохи Магії Індексів

## Ваш новий найкращий друг у світі даних

Уявіть собі бібліотеку, яка не тільки зберігає ваші книжки, а й вміє миттєво знайти потрібну, запам'ятати де ви зупинилися, і навіть підказати що почитати далі. **PostgreSQL (або просто Postgres)** — це саме така «розумна бібліотека» для ваших даних.

Якщо MongoDB — це велика коробка, куди можна кидати що завгодно, а MySQL — старий надійний шкаф з полицями, то **Postgres — це швейцарський ніж**: безкоштовний, надійний як скеля, і здатний розв'язувати 90% задач, з якими ви зіткнетесь як розробник.

> **Чому саме Postgres?**
> Instagram, Spotify, Twitch, Reddit — всі вони довіряють свої дані Postgres. Це не випадково: коли ваш проєкт виросте з 100 користувачів до мільйонів, Postgres не підведе.

### Що робить її особливою?

- **Надійність понад усе (ACID):** Думайте про це як про банківську транзакцію — або гроші переходять повністю, або операція скасовується. Ваші дані ніколи не «застрягнуть» на півдорозі.

- **Вміє читати все:** Хочете зберігати JSON як у MongoDB? Легко! Масиви? Без проблем! Географічні координати? Є і таке! Свої власні типи даних? Будь ласка!

- **Розширюваність:** Ви можете писати функції навіть на Python або JavaScript прямо всередині бази. Це як конструктор Lego — додавайте те, що вам потрібно.

- **Пошуковий профі:** В Postgres вбудований крутий механізм повнотекстового пошуку (як маленький Google у вашій базі). Не потрібно підключати Elasticsearch для простих задач!

> **Для чого це на практиці?**
>
> - **ACID** = Ваш інтернет-магазин не продасть один товар двічі
> - **JSON** = Можна зберігати налаштування користувача як єдиний об'єкт
> - **Full-text search** = Пошук по блогу без сторонніх сервісів
> - **Розширення** = Додайте підтримку PostGIS і працюйте з картами

---

## Як швидко почати?

### Варіант для профі: Docker

Якщо ви не хочете встановлювати купу програм на свій комп'ютер і захаращувати систему — Docker це ваш вибір.

> **Pro Tip:** Docker — це як віртуальна машина на мінімалках. Ви запускаєте Postgres у ізольованому контейнері, і якщо щось піде не так — просто видаліть контейнер і створіть новий. Ваша основна система залишається чистою!

#### Перед початком

Переконайтесь, що Docker встановлено:

```bash
docker --version
```

Якщо Docker не встановлено — завантажте **Docker Desktop** з [docker.com](https://www.docker.com/products/docker-desktop/).

#### Крок 1: Запустити PostgreSQL контейнер

**Базовий варіант:**

```bash
docker run --name my-postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -d \
  -p 5432:5432 \
  postgres
```

**Що означають параметри:**

- `--name my-postgres` — ім'я контейнера (можете змінити на своє)
- `-e POSTGRES_PASSWORD=mysecretpassword` — пароль для користувача postgres
- `-d` — запустити в фоновому режимі (detached)
- `-p 5432:5432` — прокинути порт (хост:контейнер)
- `postgres` — назва образу (автоматично завантажить останню версію)

**Розширений варіант з додатковими налаштуваннями:**

```bash
docker run --name my-postgres \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -e POSTGRES_DB=mydb \
  -v postgres_data:/var/lib/postgresql/data \
  -d \
  -p 5432:5432 \
  postgres:16
```

**Додаткові параметри:**

- `-e POSTGRES_USER=myuser` — створити користувача з іншим ім'ям
- `-e POSTGRES_DB=mydb` — автоматично створити базу даних
- `-v postgres_data:/var/lib/postgresql/data` — зберігати дані у volume (не втратяться після видалення контейнера)
- `postgres:16` — конкретна версія (замість `latest`)

#### Крок 2: Перевірити що контейнер працює

```bash
# Переглянути запущені контейнери
docker ps

# Переглянути всі контейнери (включно зі зупиненими)
docker ps -a
```

**Очікуваний результат:**

```
CONTAINER ID   IMAGE      COMMAND                  STATUS         PORTS                    NAMES
abc123def456   postgres   "docker-entrypoint.s…"   Up 2 minutes   0.0.0.0:5432->5432/tcp   my-postgres
```

#### Крок 3: Підключитись до PostgreSQL

**Варіант 1 — З хост-системи (якщо встановлено psql):**

```bash
psql -h localhost -p 5432 -U postgres
# Введіть пароль: mysecretpassword
```

**Варіант 2 — Зайти всередину контейнера:**

```bash
docker exec -it my-postgres psql -U postgres
```

**Варіант 3 — Виконати SQL команду без входу:**

```bash
docker exec -it my-postgres psql -U postgres -c "SELECT version();"
```

#### Керування контейнером

**Зупинити контейнер:**

```bash
docker stop my-postgres
```

**Запустити зупинений контейнер:**

```bash
docker start my-postgres
```

**Перезапустити контейнер:**

```bash
docker restart my-postgres
```

**Переглянути логи:**

```bash
# Всі логи
docker logs my-postgres

# Останні 50 рядків
docker logs --tail 50 my-postgres

# Слідкувати за логами в реальному часі
docker logs -f my-postgres
```

**Видалити контейнер (УВАГА: видалить всі дані, якщо не використовували volume):**

```bash
# Спочатку зупинити
docker stop my-postgres

# Потім видалити
docker rm my-postgres
```

**Видалити з даними (якщо використовували volume):**

```bash
docker stop my-postgres
docker rm my-postgres
docker volume rm postgres_data
```

#### Корисні команди для роботи

**Експорт бази даних:**

```bash
docker exec my-postgres pg_dump -U postgres mydb > backup.sql
```

**Імпорт бази даних:**

```bash
docker exec -i my-postgres psql -U postgres mydb < backup.sql
```

**Копіювання файлів в/з контейнера:**

```bash
# З контейнера на хост
docker cp my-postgres:/path/in/container/file.sql ./local-file.sql

# З хоста в контейнер
docker cp ./local-file.sql my-postgres:/path/in/container/
```

> **Поширена помилка:** Якщо ви не вказали `-v` (volume), всі дані видаляться разом з контейнером. Завжди використовуйте volumes для production або важливих даних!

### Windows та macOS

Для любителів класики:

- **macOS:** Просто встановіть **Postgres.app** — це найзручніший спосіб. Або через термінал (Homebrew):
  ```bash
  brew install postgresql
  brew services start postgresql
  ```
- **Windows:** Завантажте офіційний інсталятор з сайту. Він запропонує вам зручний інтерфейс для налаштування.

> **Quick Check:** Після встановлення спробуйте виконати `psql --version` в терміналі. Якщо побачили номер versії — вітаю, все працює!

---

## Як підключитись і працювати з PostgreSQL

Тепер коли Postgres встановлено, час навчитись з ним працювати. Є два основних способи: командний рядок (psql) і графічний інтерфейс (pgAdmin).

### Підключення через psql (Командний рядок)

**psql** — це офіційний термінальний клієнт для PostgreSQL. Він швидкий, потужний і завжди під рукою.

#### Стандартні креденшали

**По замовчуванню (після встановлення):**

- **Користувач:** `postgres`
- **Пароль:** той, що ви вказали під час встановлення
  - Windows/macOS інсталятор: те що ви ввели
  - Linux: встановлюється під час `sudo -u postgres psql`
  - Docker: те що вказали в `POSTGRES_PASSWORD`

#### Як підключитись

```bash
# Базове підключення
psql -U postgres

# З явним хостом та портом
psql -h localhost -p 5432 -U postgres

# До конкретної бази даних
psql -U postgres -d my_database

# Connection string (все в одному)
psql postgresql://postgres:password@localhost:5432/my_database
```

#### Корисні psql команди

Всередині psql ви можете використовувати ці команди (починаються з `\`):

```
\l                    -- Список всіх баз даних
\c database_name      -- Підключитись до іншої бази
\dt                   -- Список таблиць в поточній базі
\d table_name         -- Структура конкретної таблиці
\du                   -- Список користувачів
\di                   -- Список індексів
\df                   -- Список функцій
\x                    -- Розширений вивід (зручно для широких таблиць)
\timing               -- Показувати час виконання запитів
\q                    -- Вийти з psql
\?                    -- Показати всі psql команди
\h SELECT             -- Довідка по SQL команді
\i /path/to/file.sql  -- Виконати SQL файл
```

> **Pro Tip:** Натисніть `Ctrl+R` для пошуку по історії команд, як в bash!

#### Приклад сесії

```bash
$ psql -U postgres
psql (15.3)
Type "help" for help.

postgres=# \l                              -- Список баз
postgres=# \c my_database                  -- Підключаємось
postgres=# SELECT * FROM users LIMIT 5;    -- Виконуємо запит
postgres=# \dt                             -- Дивимось таблиці
postgres=# \q                              -- Виходимо
```

### pgAdmin: Графічний інтерфейс

**pgAdmin** — найпопулярніший безкоштовний GUI для PostgreSQL. Відмінний для тих, хто любить візуальні інструменти.

#### Встановлення pgAdmin

**Windows/macOS:**

1. Завантажте з [pgadmin.org/download](https://www.pgadmin.org/download/)
2. Встановіть як звичайну програму
3. Відкрийте pgAdmin (запуститься в браузері)

**Linux (Ubuntu/Debian):**

```bash
# Додати репозиторій
curl -fsS https://www.pgadmin.org/static/packages_pgadmin_org.pub | \
  sudo gpg --dearmor -o /usr/share/keyrings/packages-pgadmin-org.gpg

sudo sh -c 'echo "deb [signed-by=/usr/share/keyrings/packages-pgadmin-org.gpg] \
  https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" \
  > /etc/apt/sources.list.d/pgadmin4.list'

# Встановити
sudo apt update
sudo apt install pgadmin4
```

**Docker (якщо хочете запустити в контейнері):**

```bash
docker run -p 5050:80 \
  -e 'PGADMIN_DEFAULT_EMAIL=admin@example.com' \
  -e 'PGADMIN_DEFAULT_PASSWORD=admin' \
  -d dpage/pgadmin4

# Відкрийте http://localhost:5050
```

#### Перше підключення

1. Відкрийте pgAdmin
2. Права кнопка на **"Servers"** → **"Register"** → **"Server"**
3. **Вкладка "General":**
   - Name: `Local PostgreSQL` (будь-яка назва для вас)
4. **Вкладка "Connection":**
   - Host: `localhost` (або `127.0.0.1`)
   - Port: `5432`
   - Maintenance database: `postgres`
   - Username: `postgres`
   - Password: ваш пароль
   - Save password: ✓ (щоб не вводити кожен раз)
5. Натисніть **"Save"**

#### 10 корисних фіч pgAdmin

**1. Візуальний редактор запитів**

- Правий клік на базу → "Query Tool" (або F4)
- Пишете SQL, натискаєте F5 або ▶ для виконання
- Автодоповнення: `Ctrl+Space`
- Форматування коду: `Ctrl+Shift+F`
- Історія всіх запитів: вкладка "History"

**2. Перегляд і редагування даних**

- Правий клік на таблицю → "View/Edit Data" → "All Rows"
- Можна редагувати дані прямо в таблиці (як в Excel!)
- Фільтрація і сортування одним кліком

**3. EXPLAIN Visualizer**

- Виконайте `EXPLAIN ANALYZE` запит
- Натисніть кнопку "Explain" (іконка графіка)
- Бачите візуальний план виконання!
- Легко знайти вузькі місця та повільні операції

**4. Створення таблиць без SQL**

- Правий клік на "Tables" → "Create" → "Table"
- Додавайте колонки, індекси, constraint через форми
- pgAdmin генерує SQL автоматично
- Можна подивитись згенерований код перед виконанням

**5. Імпорт/Експорт даних**

- Правий клік на таблицю → "Import/Export Data"
- Підтримує CSV, JSON, Binary
- Зручно для міграції даних або створення бекапів

**6. Резервні копії (Backup/Restore)**

- Правий клік на базу → "Backup"
- Створює `.dump` або `.sql` файл
- "Restore" для відновлення з бекапу
- Можна налаштувати автоматичні бекапи

**7. Моніторинг сервера**

- Dashboard показує активність
- Кількість підключень
- Графіки транзакцій, кеш-хітів
- Активні запити в реальному часі

**8. ERD Діаграми (схема бази)**

- Правий клік на базу → "Generate ERD"
- Бачите всі таблиці та зв'язки візуально
- Можна експортувати як PNG/SVG
- Ідеально для документації

**9. SQL History & Snippets**

- Всі ваші запити автоматично зберігаються
- Можна створювати snippets (шаблони)
- Швидкий доступ до часто використовуваних запитів
- Пошук по історії

**10. Multi-Tab Queries**

- Відкривайте кілька Query Tool одночасно
- Працюйте з різними базами паралельно
- Кожна вкладка має свою історію

> **Корисні налаштування:**
> File → Preferences:
>
> - Query Tool → Editor → Font Size: збільшити для комфорту
> - Query Tool → Options → Auto commit?: OFF (для безпеки)
> - Query Tool → Options → Auto-complete: ON
> - Display → Theme: вибрати світлу/темну тему

### Інші популярні GUI клієнти

Якщо pgAdmin вам не підходить, спробуйте:

- **DBeaver** (безкоштовний, universal) — [dbeaver.io](https://dbeaver.io/)
  - Підтримує не тільки PostgreSQL
  - Легкий і швидкий

- **DataGrip** (JetBrains, платний) — [jetbrains.com/datagrip](https://www.jetbrains.com/datagrip/)
  - Найпотужніший, але платний
  - Чудова інтеграція з IntelliJ IDEA

- **TablePlus** (macOS/Windows, freemium) — [tableplus.com](https://tableplus.com/)
  - Красивий мінімалістичний інтерфейс
  - Швидкий і легкий

- **Beekeeper Studio** (безкоштовний) — [beekeeperstudio.io](https://www.beekeeperstudio.io/)
  - Простий та зрозумілий
  - Open source

> **Що обрати?**
>
> - Для навчання та швидких запитів: **psql** або **pgAdmin**
> - Для щоденної роботи з даними: **pgAdmin** або **DBeaver**
> - Для професійної розробки: **DataGrip** або **TablePlus**

---

## Що ми там зберігаємо? (Типи даних)

Якщо база даних — це склад, то типи даних — це різні види коробок та полиць. Postgres знає дуже багато типів даних. Ось ті, які вам точно знадобляться в роботі:

### Цифри

- **`INTEGER`**: Стандартний вибір для більшості випадків. Від -2 мільярдів до +2 мільярдів — цього вистачить для 99% задач.

- **`BIGINT`**: Якщо ваші дані ростуть швидше, ніж ви очікували (до 9 квінтильйонів!). Instagram використовує їх для ID постів.

- **`INT GENERATED ALWAYS AS IDENTITY`**: Сучасний спосіб робити «айдішки», які самі стають більшими. Забудьте про старий `SERIAL` — це динозавр з минулого.

  ```sql
  CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY,
    name TEXT
  );
  ```

- **`NUMERIC(p, s)`**: Якщо мова йде про гроші. Тут точність понад усе. Наприклад, `NUMERIC(10, 2)` — це до 8 цифр до коми і 2 після.

> **Поширена помилка:** Використання `FLOAT` для грошей. Це як зважувати золото на кухонних вагах — неточно і небезпечно! Завжди `NUMERIC` для фінансів.

> **Чому це важливо?**
> Якщо ви зберігаєте ціну товару як `FLOAT`, то через купу операцій 9.99€ може перетворитись на 9.989999€ або 10.00001€. Банкам це не подобається.

### Текст

- **`TEXT`**: **Золоте правило Postgres:** просто використовуйте `TEXT`. Ви не отримаєте жодних бонусів до швидкості, якщо будете обмежувати рядок через `VARCHAR(255)`. Postgres однаково добре працює з ними обома, але `TEXT` дає вам свободу.

- **`CHAR(n)`**: Використовуйте тільки якщо ви точно знаєте, що робите (це майже ніколи не потрібно). Підійде для фіксованих кодів типу `'UA'` чи `'USD'`.

> **Pro Tip:** Міф про `VARCHAR(255)` прийшов з MySQL. У Postgres немає різниці між `TEXT` і `VARCHAR` у продуктивності. Обирайте `TEXT` і живіть спокійно!

### Час та Дати

- **`TIMESTAMPTZ`**: **Завжди** додавайте `TZ` (Time Zone). Це збереже вам купу нервів, коли вашим додатком почнуть користуватися люди з різних куточків світу. Postgres сам конвертує все в UTC.

> **Real-World Аналогія:**
> Користувач у Києві створює пост о 14:00. Користувач у Нью-Йорку бачить "7 годин тому", а в Токіо — "21 годину тому". Без `TIMESTAMPTZ` ви б мали купу плутанини!

### Магічні типи

- **`UUID`**: Довга абракадабра на кшталт `123e4567-e89b-12d3-a456-426614174000`. Ідеально, якщо ви не хочете, щоб хтось вгадав наступний ID вашого замовлення або користувача.

  **Чому UUID крутіший за звичайні INTEGER для ID:**
  - **Безпека**: Неможливо вгадати наступний ID. З `INTEGER` хтось бачить `/orders/12345` і може спробувати `/orders/12346`, `/orders/12347`...

  - **Розподілені системи**: Кілька серверів можуть генерувати UUID незалежно, без ризику конфлікту. З `SERIAL`/`IDENTITY` вам треба синхронізувати лічильники між базами.

  - **Імпорт даних без головного болю**: Найкрутіша фішка! Коли ви імпортуєте дані з різних джерел (тестова база → продакшн, злиття кількох баз, міграція з іншої CMS), UUID гарантує що не буде конфліктів. Два користувачі з `id = 1` у різних базах створять проблему. Два користувачі з унікальними UUID — ніколи.

  - **Реплікація та синхронізація**: Якщо у вас кілька баз даних (наприклад, головна + резервна), UUID дозволяє створювати записи на будь-якій базі без конфліктів при об'єднанні.

  ```sql
  CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL
  );

  -- Postgres сам генерує унікальний UUID для кожного нового запису
  INSERT INTO users (email) VALUES ('user@example.com');
  ```

  Звичайно, є й мінуси: UUID займає більше місця (16 байт проти 4-8 байт для INTEGER) і трохи повільніші для індексації. Але для більшості сучасних додатків це незначна ціна за зручність.

- **`JSONB`**: Бінарний JSON. Швидкий, індексується і дозволяє тримати структуру даних гнучкою.

  ```sql
  -- Зберігаємо налаштування користувача як JSON
  INSERT INTO users (name, settings)
  VALUES ('Олена', '{"theme": "dark", "language": "uk", "notifications": true}');
  ```

- **`ENUM`**: Ваш власний список дозволених варіантів (наприклад: 'в обробці', 'відправлено', 'доставлено'). Як dropdown у формі, тільки на рівні бази даних.

> **Quick Check:** Спробуйте здогадатись, який тип використати для:
>
> - Email адреси → `TEXT`
> - Ціни товару → `NUMERIC(10,2)`
> - Дати створення аккаунту → `TIMESTAMPTZ`
> - Статусу замовлення → `ENUM` або `TEXT`

---

## Оператори: Як попросити Postgres щось зробити?

Оператори — це як слова в реченні. Вони допомагають вам сформулювати що саме ви хочете від бази даних. Почнемо з бази. Окрім звичайної математики (`+`, `-`, `*`, `/`), є кілька цікавинок:

### Порівняння

- **`=`, `<>`, `!=`, `<`, `>`** — все як у школі на математиці.

- **`BETWEEN`**: Коли треба щось «від і до».

  ```sql
  -- Знайти товари ціною від 100 до 500 грн
  SELECT * FROM products WHERE price BETWEEN 100 AND 500;
  ```

- **`IN`**: Коли шукаємо щось зі списку (як перевірити чи є елемент у масиві).

  ```sql
  -- Знайти замовлення в статусі "обробка" або "доставка"
  SELECT * FROM orders WHERE status IN ('processing', 'shipping');
  ```

- **`IS NULL`**: Пам'ятайте, `NULL` не можна порівнювати через `=`. Тільки через `IS`.

  ```sql
  -- НЕПРАВИЛЬНО ❌
  SELECT * FROM users WHERE phone = NULL;

  -- ПРАВИЛЬНО ✅
  SELECT * FROM users WHERE phone IS NULL;
  ```

> **Поширена помилка:** `NULL` — це не "пусто" або "0". Це "невідомо". Тому `NULL = NULL` завжди дає `FALSE` (бо невідоме не дорівнює невідомому). Використовуйте `IS NULL` або `IS NOT NULL`.

### Текстова магія

- **`LIKE`**: Пошук за шаблоном (`%` — будь-що, `_` — один символ). Регістр має значення!

  ```sql
  -- Знайти користувачів, чиє ім'я починається на "Ол"
  SELECT * FROM users WHERE name LIKE 'Ол%';  -- Олена, Олег, Олександр
  ```

- **`ILIKE`**: Те саме, але **Postgres ігнорує регістр**. Це неймовірно зручно для пошуку імен чи пошти.

  ```sql
  -- Знайти всіх, чия пошта на Gmail, незважаючи на великі літери
  SELECT * FROM users WHERE email ILIKE '%@gmail.com';
  -- Знайде: user@GMAIL.COM, admin@Gmail.com, test@gmail.com
  ```

- **`||`**: Склеювання двох рядків в один (конкатенація).
  ```sql
  -- Створити повне ім'я
  SELECT first_name || ' ' || last_name AS full_name FROM users;
  -- Результат: "Олена Коваленко"
  ```

> **Pro Tip:** `ILIKE` — це суперсила Postgres! У MySQL вам довелося б писати `LOWER(email) = LOWER('%@gmail.com')`, що набагато повільніше.

> **Чому це важливо?**
> Уявіть форму пошуку на сайті. Користувач вводить "iPhone" — ви хочете знайти і "iPhone 13", і "iphone 15 pro". `ILIKE '%iPhone%'` впорається, а просте `=` — ні.

---

## Пошук: Коли LIKE вже замало

Якщо у вас мільйони записів і вам потрібен справжній пошук (як в Google, з урахуванням закінчень слів та коренів), вам знадобиться **Повнотекстовий пошук (Full-Text Search, FTS)**.

> **Аналогія:** `LIKE` — це як шукати слово в книжці, перегортаючи кожну сторінку. FTS — це як використовувати покажчик у кінці підручника з усіма важливими термінами та сторінками.

Він тримається на двох китах:

1. **`tsvector`**: Це ваш текст, розбитий на «лексеми» (корені слів), очищений від зайвого (артиклі, прийменники).
2. **`tsquery`**: Ваш запит (те, що ви шукаєте).

### Приклад:

Замість того, щоб шукати точний збіг, ми кажемо Postgres: «Знайди мені щось про бази даних та продуктивність».

```sql
SELECT title, body
FROM articles
WHERE to_tsvector('english', body) @@ to_tsquery('english', 'database & performance');
```

_Цей запит знайде статтю навіть якщо там написано "databases" або "performing" - Postgres розуміє суть слів!_

> **Pro Tip:** Для української мови використовуйте `'ukrainian'` замість `'english'`. Postgres підтримує десятки мов і правильно обробляє відмінки!

> **Чому це важливо?**
> Користувач шукає "купити ноутбук". FTS знайде статті зі словами "купівля", "ноутбуки", "продаж лептопів" — тобто враховує синоніми та форми слів. `LIKE` знайшов би тільки точне "купити ноутбук".

**Різниця в швидкості:**

- `LIKE '%слово%'` на 1 млн записів: ~5-10 секунд
- FTS з індексом на 1 млн записів: ~50 мілісекунд

---

## Підзапити: Запит у запиті? Ого!

Підзапит (subquery) — це коли ви використовуєте результат одного запиту як умову для іншого. Це як матрьошка або функція всередині функції у програмуванні.

> **Аналогія:** Уявіть, що ви питаєте друга: "Хто з нашої компанії заробляє більше за середнє?" Спочатку ви рахуєте середнє, а потім порівнюєте кожного з цим числом. Підзапит працює так само!

### 1. Фільтрація (`WHERE`)

Хочете знайти працівників, які заробляють більше, ніж середній колега?

```sql
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

> **Що тут відбувається:**
>
> 1. Спочатку виконується внутрішній запит: `SELECT AVG(salary)` → припустимо, результат 4500
> 2. Потім зовнішній: `WHERE salary > 4500`
> 3. Postgres робить це автоматично за одну операцію!

### 2. Стовпці «на льоту» (`SELECT`)

Додамо до кожного рядка інформацію про максимальну зарплату в компанії:

```sql
SELECT name, salary, (SELECT MAX(salary) FROM employees) as top_salary
FROM employees;
```

**Результат:**

```
name        | salary | top_salary
------------|--------|----------
Олена       | 5000   | 8000
Андрій      | 6000   | 8000
Максим      | 8000   | 8000
```

> **Pro Tip:** Це дуже зручно для обчислення відсотків! Наприклад, щоб показати наскільки зарплата менша за максимальну: `salary * 100.0 / (SELECT MAX(salary)...)`.

### 3. Тимчасові таблиці (FROM)

Іноді зручно спочатку щось порахувати, а потім працювати з цим результатом як з новою таблицею:

```sql
SELECT AVG(order_count)
FROM (
    SELECT user_id, COUNT(*) as order_count
    FROM orders
    GROUP BY user_id
) AS stats;
```

> **Чому це важливо?**
> Цей запит показує **середню кількість замовлень на користувача**. Спочатку рахуємо скільки замовлень у кожного (`GROUP BY`), потім середнє по цих числах.

_Порада: якщо вкладеність стає надто великою, краще використовувати `WITH` (Common Table Expressions — про це нижче). Це як винести складну логіку в окрему змінну у коді._

> **Поширена помилка:** Забувати додавати `AS alias_name` після підзапиту в `FROM`. Postgres вимагає це — інакше помилка!

---

## Групування: Розкладаємо все по поличках (GROUP BY)

Представте, що вам треба порахувати скільки людей працює в кожному відділі. Для цього є `GROUP BY`.

> **Аналогія:** Уявіть склад з коробками різних кольорів. `GROUP BY` — це коли ви збираєте всі сині коробки в один кут, всі червоні — в інший, і рахуєте скільки їх у кожній купці.

### Як це працює?

Ви кажете базі: «Згрупуй всі рядки за відділом, а потім порахуй їх кількість».

```sql
SELECT department, COUNT(*) as staff_count, AVG(salary) as mid_salary
FROM employees
GROUP BY department;
```

**Результат:**

```
department     | staff_count | mid_salary
---------------|-------------|----------
Engineering    | 25          | 5500
Marketing      | 10          | 4200
Sales          | 15          | 4800
```

> **Що тут відбувається:**
>
> 1. Postgres бере всі рядки і сортує їх по відділам (як купки карт)
> 2. Для кожної купки рахує `COUNT(*)` та `AVG(salary)`
> 3. Повертає один рядок на кожен відділ

### А якщо треба відфільтрувати групи? (HAVING)

Якщо `WHERE` працює з окремими рядками, то `HAVING` — з цілими групами. Наприклад, ми хочемо побачити тільки ті відділи, де середня зарплата вища за 4000:

```sql
SELECT department, AVG(salary) as mid_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 4000;
```

> **Pro Tip:** Порядок виконання запиту:
>
> 1. `WHERE` — фільтруємо окремі рядки ПЕРЕД групуванням
> 2. `GROUP BY` — групуємо те, що залишилось
> 3. `HAVING` — фільтруємо вже згруповані результати
> 4. `ORDER BY` — сортуємо фінальний результат

**Приклад використання обох:**

```sql
-- Знайти відділи де більше 5 людей І середня зарплата > 4500
SELECT department, COUNT(*) as count, AVG(salary) as avg_sal
FROM employees
WHERE salary > 3000           -- Спочатку виключаємо стажерів
GROUP BY department
HAVING COUNT(*) > 5           -- Потім тільки великі відділи
ORDER BY avg_sal DESC;        -- Сортуємо від найбільшої зарплати
```

> **Поширена помилка:** Використовувати `WHERE` для фільтрації після групування:
>
> ```sql
> -- НЕПРАВИЛЬНО
> SELECT department, COUNT(*) as cnt
> FROM employees
> GROUP BY department
> WHERE COUNT(*) > 5;  -- Помилка! Треба HAVING
>
> -- ПРАВИЛЬНО
> SELECT department, COUNT(*) as cnt
> FROM employees
> GROUP BY department
> HAVING COUNT(*) > 5;
> ```

---

## Корисні дрібнички (Функції)

### 1. CASE: «Якщо-То» в світі SQL

Дозволяє додавати логіку прямо в запит — як `if-else` у програмуванні, але всередині SQL.

```sql
SELECT name,
    CASE
        WHEN salary > 6000 THEN 'Pro'
        WHEN salary > 4000 THEN 'Middle'
        ELSE 'Junior'
    END as level
FROM employees;
```

**Результат:**

```
name        | level
------------|-------
Олена       | Middle
Андрій      | Pro
Максим      | Pro
Ірина       | Junior
```

> **Реальний приклад:** E-commerce сайт показує статус доставки:
>
> ```sql
> SELECT order_id,
>     CASE
>         WHEN status = 'paid' AND shipped_at IS NULL THEN 'Готується до відправки'
>         WHEN shipped_at IS NOT NULL THEN 'В дорозі'
>         WHEN delivered_at IS NOT NULL THEN 'Доставлено'
>         ELSE 'Обробляється'
>     END as user_friendly_status
> FROM orders;
> ```

### 2. COALESCE: Рятувальний круг для NULL

Якщо в полі пусто (`NULL`), ви можете підставити якесь значення за замовчуванням:

```sql
SELECT name, COALESCE(phone, 'Немає номера') as contact FROM users;
```

> **Аналогія:** Це як оператор `||` у JavaScript: `user.phone || 'No phone'`. Перша не-NULL штука і повертається.

**Можна передавати кілька значень:**

```sql
-- Спробувати phone, якщо NULL — email, якщо і він NULL — 'Немає контактів'
SELECT name, COALESCE(phone, email, 'Немає контактів') as contact FROM users;
```

> **Pro Tip:** Супер корисно для звітів та експортів, де NULL виглядає як порожнє місце і збиває з пантелику!

---

## Пагінація: Коли даних дуже багато

Ми не хочемо показувати мільйон товарів на одній сторінці. Треба виводити їх частинами — як сторінки в книжці.

> **Аналогія:** Уявіть Google пошук. Перша сторінка — результати 1-10, друга — 11-20, і так далі. Це і є пагінація!

### Класичний спосіб (LIMIT & OFFSET)

- **`LIMIT`**: скільки записів взяти.
- **`OFFSET`**: скільки пропустити.

```sql
-- Сторінка 1 (перші 10 товарів)
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0;

-- Сторінка 2 (беремо 10, пропускаємо перші 10)
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 10;

-- Сторінка 3 (беремо 10, пропускаємо перші 20)
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 20;
```

**Формула:** Для сторінки N з розміром P: `LIMIT P OFFSET (N-1) * P`

> **Поширена помилка:** Забувати `ORDER BY`. Без нього Postgres може повернути записи в будь-якому порядку, і ви побачите різні результати при кожному запиті!

> **Чому це важливо?**
> _Увага! На мільйонах записів `OFFSET` може працювати повільно, бо базі все одно доводиться «пролистувати» всі початкові записи._
>
> **Приклад:** Сторінка 1000 з `LIMIT 10 OFFSET 9990` — Postgres читає 10,000 рядків, але повертає тільки 10!

**Краще рішення для великих даних (Keyset Pagination):**

```sql
-- Замість OFFSET, використовуємо останній ID попередньої сторінки
SELECT * FROM products
WHERE id > 9990  -- ID останнього елементу попередньої сторінки
ORDER BY id
LIMIT 10;
```

_Це працює миттєво навіть на мільярді записів!_

---

## Фішки PostgreSQL (JSONB та CTE)

### 1. JSONB: Майже як NoSQL, але з перевагами SQL

Ви можете зберігати цілі об'єкти в одній колонці — як у MongoDB, але з усією потужністю SQL!

```sql
-- Створюємо таблицю з JSON колонкою
CREATE TABLE products (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT,
    attributes JSONB
);

-- Вставляємо товар з атрибутами як JSON
INSERT INTO products (name, attributes)
VALUES ('iPhone 15', '{"color": "black", "storage": "128GB", "5G": true}');
```

**Пошук по JSONB:**

```sql
-- Знайти всі чорні айфони
SELECT * FROM products WHERE attributes->>'color' = 'black';

-- Знайти товари з підтримкою 5G
SELECT * FROM products WHERE attributes->>'5G' = 'true';

-- Знайти товари з об'ємом пам'яті більше 64GB
SELECT * FROM products WHERE (attributes->>'storage')::INT > 64;
```

> **Аналогія:** JSONB — це як мати особисту шафу з висувними ящиками всередині звичайного складу. Основна структура (id, name) фіксована, але всередину можна покласти що завгодно!

> **Pro Tip:** Пошук по JSON працює **миттєво** через спеціальні індекси GIN!
>
> ```sql
> CREATE INDEX idx_attributes ON products USING GIN (attributes);
> ```

> **Коли використовувати JSONB?**
>
> - Налаштування користувача (тема, мова, сповіщення)
> - Метадані файлів (EXIF фото, теги)
> - Логи подій (flexible schema)
> - Не варто для даних, які часто треба фільтрувати (краще окремі колонки)
> - Не варто для фінансових даних (потрібна строга структура)

#### Як ДОДАВАТИ значення в JSONB

**Спосіб 1: Функція `jsonb_set()` для додавання нового поля**

```sql
-- Створюємо таблицю з користувачами
CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT,
    settings JSONB
);

INSERT INTO users (name, settings)
VALUES ('Олена', '{"theme": "dark", "language": "uk"}');

-- Додати новий ключ "premium"
UPDATE users
SET settings = jsonb_set(settings, '{premium}', 'true', true)
WHERE name = 'Олена';

-- Результат: {"theme": "dark", "language": "uk", "premium": true}
```

> **Синтаксис:** `jsonb_set(target, path, new_value, create_if_missing)`
>
> - `target` — ваш JSONB об'єкт
> - `path` — шлях до ключа у форматі `'{ключ}'` або `'{ключ, вкладений_ключ}'`
> - `new_value` — нове значення (обов'язково в лапках для рядків!)
> - `create_if_missing` — якщо `true`, створить ключ якщо його немає

**Спосіб 2: Оператор `||` (merge) для додавання кількох полів**

```sql
-- Додати кілька полів одночасно
UPDATE users
SET settings = settings || '{"vip": true, "discount": 10}'::jsonb
WHERE name = 'Олена';

-- Результат: {"theme": "dark", "language": "uk", "premium": true, "vip": true, "discount": 10}
```

> **Поширена помилка:** Забувати `::jsonb` після JSON рядка. Без нього Postgres не зрозуміє що це JSON.

**Спосіб 3: Додавання вкладених (nested) об'єктів**

```sql
-- Створити вкладену структуру preferences.email
UPDATE users
SET settings = jsonb_set(
    settings,
    '{preferences, email}',  -- Шлях через кому
    '"weekly"',
    true
)
WHERE name = 'Олена';

-- Результат: {..., "preferences": {"email": "weekly"}}
```

**Спосіб 4: Додавання в масив**

```sql
-- Таблиця з масивом тегів
CREATE TABLE posts (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT,
    tags JSONB
);

INSERT INTO posts (title, tags)
VALUES ('PostgreSQL гайд', '["database", "tutorial"]');

-- Додати новий тег
UPDATE posts
SET tags = tags || '"advanced"'::jsonb
WHERE title = 'PostgreSQL гайд';

-- Результат: ["database", "tutorial", "advanced"]
```

#### Як ОНОВЛЮВАТИ значення в JSONB

**Спосіб 1: Змінити існуюче поле через `jsonb_set()`**

```sql
-- Змінити тему з dark на light
UPDATE users
SET settings = jsonb_set(settings, '{theme}', '"light"')
WHERE name = 'Олена';
```

**Спосіб 2: Оновити кілька полів через `||`**

```sql
-- || перезапише існуючі ключі новими значеннями
UPDATE users
SET settings = settings || '{"theme": "auto", "language": "en"}'::jsonb
WHERE name = 'Олена';
```

> **Різниця між `jsonb_set()` і `||`:**
>
> - `jsonb_set()` — точне оновлення одного поля по шляху
> - `||` — швидке оновлення кількох полів одночасно (merge)

**Спосіб 3: Оновити вкладене значення**

```sql
-- Змінити тільки preferences.email
UPDATE users
SET settings = jsonb_set(settings, '{preferences, email}', '"daily"')
WHERE name = 'Олена';
```

**Спосіб 4: Умовне оновлення**

```sql
-- Змінити тему тільки якщо вона зараз "light"
UPDATE users
SET settings = jsonb_set(settings, '{theme}', '"dark"')
WHERE settings->>'theme' = 'light';
```

**Спосіб 5: Числові операції (інкремент)**

```sql
-- Збільшити discount на 5
UPDATE users
SET settings = jsonb_set(
    settings,
    '{discount}',
    (COALESCE((settings->>'discount')::INT, 0) + 5)::TEXT::jsonb
)
WHERE name = 'Олена';
```

> **Реальний приклад:** Toggle (перемикач) для boolean
>
> ```sql
> -- Увімкнути/вимкнути сповіщення
> UPDATE users
> SET settings = jsonb_set(
>     settings,
>     '{notifications}',
>     (NOT (settings->>'notifications')::BOOLEAN)::TEXT::jsonb
> )
> WHERE name = 'Олена';
> ```

#### Як ВИДАЛЯТИ значення з JSONB

**Спосіб 1: Видалити один ключ (оператор `-`)**

```sql
-- Видалити поле premium
UPDATE users
SET settings = settings - 'premium'
WHERE name = 'Олена';
```

**Спосіб 2: Видалити кілька ключів одночасно**

```sql
-- Видалити vip та discount
UPDATE users
SET settings = settings - ARRAY['vip', 'discount']
WHERE name = 'Олена';
```

**Спосіб 3: Видалити вкладений ключ**

```sql
-- Видалити preferences.email (але залишити інші preferences)
UPDATE users
SET settings = jsonb_set(
    settings,
    '{preferences}',
    (settings->'preferences') - 'email'
)
WHERE name = 'Олена';
```

**Спосіб 4: Видалити елемент з масиву (за індексом)**

```sql
-- Оператор #- видаляє по шляху
UPDATE posts
SET tags = tags #- '{0}'  -- Видалити перший елемент (індекс 0)
WHERE title = 'PostgreSQL гайд';
```

**Спосіб 5: Видалити елемент з масиву (за значенням)**

```sql
-- Видалити конкретний тег з масиву
UPDATE posts
SET tags = (
    SELECT jsonb_agg(tag)
    FROM jsonb_array_elements_text(tags) tag
    WHERE tag != 'tutorial'
)
WHERE title = 'PostgreSQL гайд';
```

**Спосіб 6: Очистити весь JSON**

```sql
-- Встановити пусті налаштування
UPDATE users SET settings = '{}'::jsonb WHERE name = 'Олена';

-- Або NULL
UPDATE users SET settings = NULL WHERE name = 'Олена';
```

> **Quick Check:** Як додати поле `last_login` з поточним часом?
>
> ```sql
> UPDATE users
> SET settings = settings || jsonb_build_object('last_login', NOW()::TEXT);
> ```

#### Корисні JSONB функції

**Побудова JSON з SQL:**

```sql
-- jsonb_build_object() - створити об'єкт
SELECT jsonb_build_object(
    'name', 'Петро',
    'age', 25,
    'active', true
);

-- jsonb_build_array() - створити масив
SELECT jsonb_build_array('один', 2, true, null);

-- json_agg() - агрегувати рядки в JSON масив
SELECT
    category,
    json_agg(json_build_object('name', name, 'price', price)) as products
FROM products
GROUP BY category;
```

**Розгортання JSON:**

```sql
-- jsonb_each() - розгорнути в пари ключ-значення
SELECT key, value
FROM users, jsonb_each(settings)
WHERE name = 'Олена';

-- jsonb_object_keys() - тільки ключі
SELECT jsonb_object_keys(settings) FROM users WHERE name = 'Олена';

-- jsonb_array_elements() - елементи масиву
SELECT jsonb_array_elements(tags) FROM posts;

-- jsonb_array_length() - довжина масиву
SELECT jsonb_array_length(tags) FROM posts;
```

> **Pro Tip:** Використовуйте GIN індекси для швидкого пошуку по JSON:
>
> ```sql
> CREATE INDEX idx_users_settings ON users USING GIN (settings);
> ```
>
> Це прискорить запити з `@>`, `?`, `?&`, `?|` операторами у 100+ разів!

### 2. WITH (CTE): Чистий Код

**Common Table Expressions** — замість жахливих вкладених запитів, робіть «віртуальні таблиці» зверху. Це як створити змінну у програмуванні!

```sql
WITH vip_users AS (
    SELECT id, name FROM users WHERE total_spent > 1000
)
SELECT vip_users.name, COUNT(orders.id) as order_count
FROM vip_users
JOIN orders ON vip_users.id = orders.user_id
GROUP BY vip_users.name;
```

> **Аналогія:**
>
> ```javascript
> // Без WITH — все в одному купчі
> const result = calculateAverage(filterUsers(getAllUsers()));
>
> // З WITH — читабельно та зрозуміло
> const allUsers = getAllUsers();
> const filteredUsers = filterUsers(allUsers);
> const result = calculateAverage(filteredUsers);
> ```

**Можна створювати кілька CTE:**

```sql
WITH
    active_users AS (
        SELECT id FROM users WHERE last_login > NOW() - INTERVAL '30 days'
    ),
    recent_orders AS (
        SELECT user_id, COUNT(*) as order_count
        FROM orders
        WHERE created_at > NOW() - INTERVAL '30 days'
        GROUP BY user_id
    )
SELECT active_users.id, COALESCE(recent_orders.order_count, 0) as orders
FROM active_users
LEFT JOIN recent_orders ON active_users.id = recent_orders.user_id;
```

> **Pro Tip:** CTE роблять складні запити **набагато читабельнішими**. Ваші колеги скажуть спасибі через 6 місяців, коли треба буде це читати!

---

## Індекси: Магія швидкості

Індекс — це як зміст у книжці або покажчик у підручнику. Без нього базі доводиться перечитувати всю таблицю зверху до низу (Full Table Scan), щоб знайти одного користувача.

> **Аналогія:**
> Уявіть, що ви шукаєте слово "PostgreSQL" у словнику:
>
> - **Без індексу:** Читаєте кожну сторінку від "А" до "П" — займає годину
> - **З індексом:** Відкриваєте покажчик, бачите "PostgreSQL — стор. 342", відразу туди — 5 секунд

### Коли вони потрібні?

- Коли у вас **тисячі або мільйони рядків**
- Коли ви **часто робите** `WHERE email = 'user@example.com'`
- На полях для `JOIN` (foreign keys)
- На полях для `ORDER BY` (якщо сортування повільне)

### Магія в цифрах:

**Без індексу** (Full Table Scan):

```sql
SELECT * FROM users WHERE email = 'olena@gmail.com';
-- 1,000,000 рядків → ~50 мс
```

**З індексом** (Index Scan):

```sql
CREATE INDEX idx_users_email ON users(email);
SELECT * FROM users WHERE email = 'olena@gmail.com';
-- 1,000,000 рядків → <1 мс (швидше в 50+ разів!)
```

### Типи індексів:

```sql
-- 1. Звичайний індекс (B-Tree) — підходить для 95% випадків
CREATE INDEX idx_users_name ON users(name);

-- 2. Унікальний індекс — гарантує відсутність дублікатів
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- 3. Складений індекс — для пошуку по кількох колонках
CREATE INDEX idx_users_name_age ON users(first_name, last_name);

-- 4. Часткові індекси — тільки для підмножини даних
CREATE INDEX idx_active_users ON users(email) WHERE active = true;

-- 5. GIN індекс — для JSONB та Full-Text Search
CREATE INDEX idx_attributes ON products USING GIN (attributes);
```

> **Pro Tip:** Порядок колонок у складеному індексі має значення!
>
> - `INDEX (country, city)` працює для `WHERE country = 'UA'` та `WHERE country = 'UA' AND city = 'Kyiv'`
> - Але **НЕ** працює для `WHERE city = 'Kyiv'` (без country)
> - Думайте про це як про телефонний довідник: спочатку прізвище, потім ім'я!

### Темна сторона індексів

**Головне правило:** Не ставте індекси на все підряд! Вони пришвидшують читання, але сповільнюють запис.

```sql
-- При INSERT/UPDATE/DELETE база має:
-- 1. Записати дані в таблицю
-- 2. Оновити КОЖЕН індекс на цій таблиці
```

> **Коли НЕ треба індекс:**
>
> - На малих таблицях (<10,000 рядків) — Full Scan швидший!
> - На колонках, які рідко використовуються в `WHERE`/`JOIN`
> - На колонках з малою кількістю унікальних значень (наприклад, `is_active: true/false`)
> - Якщо таблиця має більше записів ніж читань

**Перевірити чи використовується індекс:**

```sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';
-- Шукайте рядок "Index Scan" (добре) або "Seq Scan" (погано)
```

> **Quick Check:**
> Створіть таблицю з мільйоном рядків, зробіть запит без індексу, додайте індекс, повторіть запит. Різниця вас вразить!

---

## Підсумок

- **Як встановити та підключитись** — Docker, psql, pgAdmin, інші інструменти
- **Чому Postgres** — найкращий вибір для більшості проєктів
- **Типи даних** — від TEXT до JSONB та UUID
- **Оператори** — LIKE, ILIKE, BETWEEN та інші
- **Всі SQL функції** — текстові, числові, дати/часу, агрегатні
- **Повнотекстовий пошук** — ваш власний Google всередині бази
- **Підзапити та GROUP BY** — для складних аналітичних задач
- **JSONB повністю** — як додавати, оновлювати і видаляти значення (15 способів!)
- **CTE (WITH)** — чистий та читабельний код
- **Індекси** — магія швидкості (але з обережністю!)
- **pgAdmin** — 10 корисних фіч для продуктивної роботи

> **Наступні кроки:**
>
> 1. **Практикуйтесь!** Виконайте файл `demo_data.sql` — там 60+ готових прикладів
> 2. **Експериментуйте** — змінюйте запити, додавайте свої дані
> 3. **Створіть проєкт** — блог, магазин, todo-app зі своєю схемою
> 4. **Вивчіть JOIN-и** — зв'язки між таблицями (one-to-many, many-to-many)
> 5. **Дослідіть транзакції** — `BEGIN`, `COMMIT`, `ROLLBACK`
> 6. **Спробуйте розширення** — PostGIS (карти), pg_trgm (нечіткий пошук)

> **Файли для практики:**
>
> - `demo_data.sql` — готова база з даними та 60+ прикладів запитів
> - `claude.md` — гід зі стилю написання документації (для викладачів)

> **Корисні ресурси:**
>
> - Офіційна документація: [postgresql.org/docs](https://postgresql.org/docs)
> - Інтерактивні вправи: [pgexercises.com](https://pgexercises.com)
> - YouTube: шукайте "PostgreSQL Tutorial" для візуального навчання
> - Stack Overflow: [stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)

---
