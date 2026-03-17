-- ============================================
-- PostgreSQL Demo Database
-- Демонстрація всіх функцій з лекції
-- ============================================
--
-- ЩО В ЦЬОМУ ФАЙЛІ:
--
-- Повний гід по роботі з JSONB (15 розділів!)
--    - Як ДОДАВАТИ значення в JSON (4 способи)
--    - Як ОНОВЛЮВАТИ JSON (5 способів + умовні оновлення)
--    - Як ВИДАЛЯТИ з JSON (6 способів, включно з масивами)
--    - Реальні приклади: історія дій, toggle, масові операції
--
-- 60+ готових прикладів запитів
-- Реалістичні тестові дані (користувачі, товари, замовлення)
-- Всі приклади готові до копіювання та виконання
--
-- ============================================
-- ЯК ВИКОНАТИ ЦЕЙ ФАЙЛ
-- ============================================
--
-- ВАРІАНТ 1 (psql з командного рядка):
--   psql -U postgres -f demo_data.sql
--
-- ВАРІАНТ 2 (всередині psql):
--   \i /path/to/demo_data.sql
--
-- ВАРІАНТ 3 (pgAdmin):
--   1. Відкрийте Query Tool (F4)
--   2. File → Open → виберіть demo_data.sql
--   3. Execute (F5)
--
-- ВАРІАНТ 4 (копіювати-вставити):
--   1. Скопіюйте потрібну секцію
--   2. Вставте в Query Tool
--   3. Execute (F5)
--
-- ПРИМІТКА: Детальні інструкції по підключенню до PostgreSQL,
--    використанню psql та pgAdmin дивіться в lecture_postgresql.md
--    (розділ "Як підключитись і працювати з PostgreSQL")
--
-- ============================================
-- СТВОРЕННЯ ДЕМО БАЗИ
-- ============================================

-- Видаляємо таблиці якщо вони існують (для чистого старту)
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS articles CASCADE;

-- ============================================
-- 1. СТВОРЕННЯ ТАБЛИЦЬ
-- ============================================

-- Таблиця користувачів (демонструє різні типи даних)
CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL,
    last_name TEXT,
    phone TEXT,
    birth_date DATE,
    city TEXT,
    balance NUMERIC(10, 2) DEFAULT 0.00,
    is_active BOOLEAN DEFAULT true,
    settings JSONB,  -- Налаштування користувача в JSON
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_login TIMESTAMPTZ
);

-- Таблиця категорій товарів
CREATE TABLE categories (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);

-- Таблиця товарів (демонструє JSONB для атрибутів)
CREATE TABLE products (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    category_id INT REFERENCES categories(id),
    price NUMERIC(10, 2) NOT NULL,
    sale_price NUMERIC(10, 2),
    stock INT DEFAULT 0,
    rating NUMERIC(2, 1) CHECK (rating >= 0 AND rating <= 5),
    attributes JSONB,  -- Гнучкі атрибути (колір, розмір, тощо)
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблиця замовлень
CREATE TABLE orders (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES users(id),
    total_amount NUMERIC(10, 2) NOT NULL,
    status TEXT CHECK (status IN ('pending', 'paid', 'shipped', 'delivered', 'cancelled')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    shipped_at TIMESTAMPTZ,
    delivered_at TIMESTAMPTZ
);

-- Таблиця позицій замовлень
CREATE TABLE order_items (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    price NUMERIC(10, 2) NOT NULL  -- Ціна на момент покупки
);

-- Таблиця статей (для демонстрації Full-Text Search)
CREATE TABLE articles (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INT REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 2. ВСТАВКА ТЕСТОВИХ ДАНИХ
-- ============================================

-- Користувачі
INSERT INTO users (email, first_name, last_name, phone, birth_date, city, balance, settings, created_at, last_login) VALUES
('olena.kovalenko@gmail.com', 'Олена', 'Коваленко', '050-123-4567', '1995-05-15', 'Київ', 1500.50,
 '{"theme": "dark", "language": "uk", "notifications": true}',
 NOW() - INTERVAL '6 months', NOW() - INTERVAL '2 days'),

('andriy.shevchenko@gmail.com', 'Андрій', 'Шевченко', '067-234-5678', '1988-03-22', 'Львів', 3200.00,
 '{"theme": "light", "language": "uk", "notifications": false}',
 NOW() - INTERVAL '1 year', NOW() - INTERVAL '1 week'),

('maksym.petrenko@gmail.com', 'Максим', 'Петренко', NULL, '2000-11-08', 'Одеса', 750.25,
 '{"theme": "dark", "language": "en", "notifications": true}',
 NOW() - INTERVAL '3 months', NOW() - INTERVAL '1 hour'),

('iryna.bondar@GMAIL.COM', 'Ірина', 'Бондар', '093-345-6789', '1992-07-30', 'Харків', 5000.00,
 '{"theme": "auto", "language": "uk", "notifications": true, "newsletter": true}',
 NOW() - INTERVAL '2 years', NOW() - INTERVAL '5 months'),

('taras.melnyk@gmail.com', 'Тарас', 'Мельник', '050-456-7890', '1998-01-12', 'Дніпро', 0.00,
 '{"theme": "light", "language": "uk"}',
 NOW() - INTERVAL '1 month', NULL),  -- Ніколи не логінився після реєстрації

('sofia.marchenko@outlook.com', 'Софія', 'Марченко', NULL, '2001-09-25', 'Київ', 250.75,
 '{"theme": "dark", "language": "uk", "notifications": false}',
 NOW() - INTERVAL '2 weeks', NOW() - INTERVAL '3 days');

-- Категорії товарів
INSERT INTO categories (name, description) VALUES
('Електроніка', 'Смартфони, ноутбуки, планшети'),
('Одяг', 'Чоловічий та жіночий одяг'),
('Книги', 'Художня та технічна література'),
('Дім і сад', 'Товари для дому та саду'),
('Спорт', 'Спортивне обладнання та одяг');

-- Товари (з JSONB атрибутами)
INSERT INTO products (name, description, category_id, price, sale_price, stock, rating, attributes) VALUES
('iPhone 15 Pro', 'Смартфон Apple останнього покоління', 1, 45999.00, 42999.00, 15, 4.8,
 '{"color": "black", "storage": "256GB", "5G": true, "warranty": "2 years"}'),

('MacBook Air M2', 'Ультрабук для роботи та навчання', 1, 52999.00, NULL, 8, 4.9,
 '{"color": "silver", "ram": "16GB", "ssd": "512GB", "screen": "13.6 inch"}'),

('Samsung Galaxy S24', 'Флагманський Android смартфон', 1, 38999.00, 35999.00, 22, 4.7,
 '{"color": "violet", "storage": "128GB", "5G": true, "warranty": "1 year"}'),

('Чоловіча куртка North Face', 'Зимова куртка з мембраною', 2, 8500.00, 6800.00, 30, 4.5,
 '{"size": "L", "color": "black", "material": "polyester", "waterproof": true}'),

('Жіночі кросівки Nike', 'Бігові кросівки для тренувань', 2, 3200.00, NULL, 50, 4.3,
 '{"size": "38", "color": "white", "gender": "female"}'),

('PostgreSQL: The Definitive Guide', 'Повний гід по PostgreSQL', 3, 1200.00, NULL, 100, 5.0,
 '{"language": "en", "pages": 450, "format": "paperback"}'),

('Чисті функції на JavaScript', 'Книга про функціональне програмування', 3, 850.00, 720.00, 75, 4.6,
 '{"language": "uk", "pages": 320, "format": "hardcover", "author": "Іван Петренко"}'),

('Кавоварка DeLonghi', 'Автоматична кавоварка для еспресо', 4, 15000.00, NULL, 12, 4.4,
 '{"color": "black", "capacity": "1.8L", "power": "1450W", "type": "espresso"}'),

('Велосипед Trek Mountain', 'Гірський велосипед 29 дюймів', 5, 28000.00, 25000.00, 5, 4.7,
 '{"size": "L", "color": "blue", "gears": 21, "frame": "aluminum"}'),

('Гантелі 2x10кг', 'Набір гантелей для домашніх тренувань', 5, 1500.00, NULL, 40, 4.2,
 '{"weight": "10kg", "material": "rubber", "type": "fixed"}');

-- Замовлення
INSERT INTO orders (user_id, total_amount, status, created_at, shipped_at, delivered_at) VALUES
(1, 45999.00, 'delivered', NOW() - INTERVAL '5 months', NOW() - INTERVAL '5 months' + INTERVAL '2 days', NOW() - INTERVAL '5 months' + INTERVAL '5 days'),
(1, 1200.00, 'delivered', NOW() - INTERVAL '3 months', NOW() - INTERVAL '3 months' + INTERVAL '1 day', NOW() - INTERVAL '3 months' + INTERVAL '3 days'),
(2, 52999.00, 'delivered', NOW() - INTERVAL '8 months', NOW() - INTERVAL '8 months' + INTERVAL '1 day', NOW() - INTERVAL '8 months' + INTERVAL '4 days'),
(2, 12000.00, 'shipped', NOW() - INTERVAL '3 days', NOW() - INTERVAL '1 day', NULL),
(3, 3200.00, 'paid', NOW() - INTERVAL '2 days', NULL, NULL),
(4, 70849.00, 'delivered', NOW() - INTERVAL '1 year', NOW() - INTERVAL '1 year' + INTERVAL '1 day', NOW() - INTERVAL '1 year' + INTERVAL '4 days'),
(4, 2550.00, 'cancelled', NOW() - INTERVAL '6 months', NULL, NULL),
(6, 850.00, 'pending', NOW() - INTERVAL '1 day', NULL, NULL);

-- Позиції замовлень
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 42999.00),
(2, 6, 1, 1200.00),
(3, 2, 1, 52999.00),
(4, 8, 1, 15000.00),
(4, 10, 2, 1500.00),
(5, 5, 1, 3200.00),
(6, 1, 1, 42999.00),
(6, 2, 1, 52999.00),
(6, 9, 1, 25000.00),
(7, 4, 3, 6800.00),
(8, 7, 1, 720.00);

-- Статті (для Full-Text Search)
INSERT INTO articles (title, body, author_id) VALUES
('Як оптимізувати запити в PostgreSQL',
 'PostgreSQL — це потужна база даних з багатьма можливостями оптимізації. У цій статті ми розглянемо як правильно створювати індекси, аналізувати плани виконання запитів через EXPLAIN ANALYZE, та використовувати партиціонування таблиць для підвищення продуктивності. Індекси особливо важливі коли у вас мільйони записів.',
 2),

('Вступ до Full-Text Search',
 'Повнотекстовий пошук у PostgreSQL дозволяє шукати документи за змістом, а не просто за точним збігом. Використовуючи tsvector та tsquery ви можете будувати складні пошукові системи без додаткових інструментів типу Elasticsearch. Це економить ресурси і спрощує архітектуру.',
 1),

('JSONB: NoSQL можливості в PostgreSQL',
 'JSONB тип даних дає вам гнучкість NoSQL баз даних зберігаючи всі переваги SQL. Ви можете зберігати складні об''єкти, індексувати їх через GIN індекси, та робити швидкі запити. Ідеально для налаштувань користувачів, метаданих та логів.',
 3),

('Транзакції та ACID в базах даних',
 'ACID властивості гарантують надійність ваших даних. Atomicity означає що транзакція виконується повністю або не виконується взагалі. Consistency гарантує що дані завжди в валідному стані. Isolation забезпечує що паралельні транзакції не конфліктують. Durability — що збережені дані не зникнуть.',
 2),

('Партиціонування великих таблиць',
 'Коли таблиця росте до десятків мільйонів записів, партиціонування стає необхідністю. PostgreSQL підтримує декларативне партиціонування по діапазонах, спискам та хешам. Це дозволяє розділити велику таблицю на менші частини для швидшого доступу та обслуговування.',
 4);

-- ============================================
-- 3. СТВОРЕННЯ ІНДЕКСІВ
-- ============================================

-- Індекс на email для швидкого пошуку користувачів
CREATE INDEX idx_users_email ON users(email);

-- Індекс на city для групування
CREATE INDEX idx_users_city ON users(city);

-- Складений індекс для пошуку активних користувачів по місту
CREATE INDEX idx_users_active_city ON users(city, is_active) WHERE is_active = true;

-- GIN індекс для пошуку по JSONB
CREATE INDEX idx_users_settings ON users USING GIN (settings);
CREATE INDEX idx_products_attributes ON products USING GIN (attributes);

-- Індекси для full-text search
CREATE INDEX idx_articles_title_fts ON articles USING GIN (to_tsvector('ukrainian', title));
CREATE INDEX idx_articles_body_fts ON articles USING GIN (to_tsvector('ukrainian', body));

-- Індекси для foreign keys та частих JOIN
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_product ON order_items(product_id);

-- Індекс для фільтрації по датах
CREATE INDEX idx_orders_created ON orders(created_at);

-- ============================================
-- 4. ПРИКЛАДИ ЗАПИТІВ З ЛЕКЦІЇ
-- ============================================

-- ====== АГРЕГАТНІ ФУНКЦІЇ ======

-- COUNT: Скільки користувачів у кожному місті?
SELECT city, COUNT(*) as users_count
FROM users
GROUP BY city
ORDER BY users_count DESC;

-- SUM: Загальна виручка
SELECT SUM(total_amount) as total_revenue
FROM orders
WHERE status = 'delivered';

-- AVG: Середня ціна товару по категоріях
SELECT c.name as category,
       ROUND(AVG(p.price), 2) as avg_price,
       COUNT(p.id) as products_count
FROM products p
JOIN categories c ON p.category_id = c.id
GROUP BY c.name
ORDER BY avg_price DESC;

-- MIN/MAX: Найдешевший і найдорожчий товар
SELECT
    MIN(price) as cheapest,
    MAX(price) as most_expensive,
    ROUND(AVG(price), 2) as average
FROM products;

-- ====== ТЕКСТОВІ ФУНКЦІЇ ======

-- UPPER/LOWER: Нормалізація email
SELECT
    email as original,
    LOWER(email) as normalized,
    UPPER(first_name) as uppercase_name
FROM users
LIMIT 3;

-- LENGTH: Користувачі з короткими іменами
SELECT first_name, LENGTH(first_name) as name_length
FROM users
WHERE LENGTH(first_name) < 6;

-- SUBSTRING: Код міста з телефону
SELECT
    first_name,
    phone,
    SUBSTRING(phone FROM 1 FOR 3) as operator_code
FROM users
WHERE phone IS NOT NULL;

-- TRIM: Очистка пробілів
SELECT TRIM('   PostgreSQL   ') as cleaned;

-- REPLACE: Видалити дефіси з телефону
SELECT
    phone as original,
    REPLACE(phone, '-', '') as cleaned
FROM users
WHERE phone IS NOT NULL;

-- CONCAT / ||: Повне ім'я
SELECT
    first_name || ' ' || last_name as full_name,
    CONCAT(first_name, ' з міста ', city) as description
FROM users;

-- ====== LIKE / ILIKE ======

-- ILIKE: Знайти всіх з Gmail (без врахування регістру)
SELECT first_name, email
FROM users
WHERE email ILIKE '%@gmail.com';

-- LIKE: Імена що починаються на "О"
SELECT first_name
FROM users
WHERE first_name LIKE 'О%';

-- ====== ФУНКЦІЇ ДАТИ ТА ЧАСУ ======

-- EXTRACT: Користувачі по рокам реєстрації
SELECT
    EXTRACT(YEAR FROM created_at) as year,
    COUNT(*) as new_users
FROM users
GROUP BY year
ORDER BY year;

-- DATE_TRUNC: Замовлення по місяцях
SELECT
    DATE_TRUNC('month', created_at) as month,
    COUNT(*) as orders_count,
    SUM(total_amount) as revenue
FROM orders
GROUP BY month
ORDER BY month DESC;

-- AGE: Вік акаунту
SELECT
    first_name,
    AGE(NOW(), created_at) as account_age
FROM users;

-- INTERVAL: Активні користувачі (логінились за останні 30 днів)
SELECT first_name, last_login
FROM users
WHERE last_login > NOW() - INTERVAL '30 days';

-- Неактивні користувачі
SELECT first_name, email, last_login
FROM users
WHERE last_login < NOW() - INTERVAL '6 months' OR last_login IS NULL;

-- ====== МАТЕМАТИЧНІ ФУНКЦІЇ ======

-- ROUND: Округлення цін
SELECT
    name,
    price,
    ROUND(price) as rounded_price,
    ROUND(price, -2) as rounded_to_hundreds
FROM products
LIMIT 5;

-- CEIL/FLOOR: Округлення вгору/вниз
SELECT
    price,
    CEIL(price) as ceil_price,
    FLOOR(price) as floor_price
FROM products
WHERE sale_price IS NOT NULL
LIMIT 5;

-- MOD: Парні/непарні ID
SELECT
    id,
    first_name,
    CASE
        WHEN MOD(id, 2) = 0 THEN 'Парний'
        ELSE 'Непарний'
    END as id_type
FROM users;

-- ====== CASE ======

-- Категоризація користувачів по балансу
SELECT
    first_name,
    balance,
    CASE
        WHEN balance > 3000 THEN 'VIP'
        WHEN balance > 1000 THEN 'Premium'
        WHEN balance > 0 THEN 'Regular'
        ELSE 'New'
    END as tier
FROM users
ORDER BY balance DESC;

-- Статус замовлення для користувачів
SELECT
    id,
    status,
    CASE
        WHEN status = 'pending' THEN 'Очікує оплати'
        WHEN status = 'paid' AND shipped_at IS NULL THEN 'Готується до відправки'
        WHEN shipped_at IS NOT NULL AND delivered_at IS NULL THEN 'В дорозі'
        WHEN delivered_at IS NOT NULL THEN 'Доставлено'
        ELSE 'Скасовано'
    END as status_ukrainian
FROM orders;

-- ====== COALESCE ======

-- Підставити значення за замовчуванням для NULL
SELECT
    first_name,
    COALESCE(phone, 'Немає номера') as contact,
    COALESCE(last_name, 'Не вказано') as surname
FROM users;

-- Вибрати найкращу ціну (sale_price або price)
SELECT
    name,
    price,
    sale_price,
    COALESCE(sale_price, price) as final_price
FROM products
ORDER BY final_price DESC;

-- ====== NULLIF / GREATEST / LEAST ======

-- NULLIF: Уникнення ділення на нуль
SELECT
    SUM(total_amount) / NULLIF(COUNT(*), 0) as avg_order
FROM orders;

-- GREATEST/LEAST: Найкраща ціна з кількох варіантів
SELECT
    name,
    price,
    sale_price,
    LEAST(COALESCE(sale_price, price), price) as best_price,
    GREATEST(stock, 10) as min_stock_display  -- Показати мінімум 10
FROM products
LIMIT 5;

-- ====== GROUP BY + HAVING ======

-- Категорії де середня ціна > 10000
SELECT
    c.name,
    COUNT(p.id) as products_count,
    ROUND(AVG(p.price), 2) as avg_price
FROM products p
JOIN categories c ON p.category_id = c.id
GROUP BY c.name
HAVING AVG(p.price) > 10000;

-- Міста з більше ніж 1 користувачем
SELECT
    city,
    COUNT(*) as users_count
FROM users
GROUP BY city
HAVING COUNT(*) > 1;

-- ====== ПІДЗАПИТИ ======

-- Користувачі з балансом вище середнього
SELECT first_name, balance
FROM users
WHERE balance > (SELECT AVG(balance) FROM users);

-- Товари дорожчі за середню ціну в своїй категорії
SELECT p.name, p.price, c.name as category
FROM products p
JOIN categories c ON p.category_id = c.id
WHERE p.price > (
    SELECT AVG(price)
    FROM products
    WHERE category_id = p.category_id
);

-- ====== WITH (CTE) ======

-- Аналіз VIP користувачів
WITH vip_users AS (
    SELECT id, first_name, balance
    FROM users
    WHERE balance > 1000
)
SELECT
    v.first_name,
    v.balance,
    COUNT(o.id) as orders_count,
    COALESCE(SUM(o.total_amount), 0) as total_spent
FROM vip_users v
LEFT JOIN orders o ON v.id = o.user_id
GROUP BY v.id, v.first_name, v.balance
ORDER BY total_spent DESC;

-- Кілька CTE: Активні користувачі та їх замовлення
WITH
    active_users AS (
        SELECT id, first_name
        FROM users
        WHERE last_login > NOW() - INTERVAL '30 days'
    ),
    recent_orders AS (
        SELECT user_id, COUNT(*) as order_count, SUM(total_amount) as total
        FROM orders
        WHERE created_at > NOW() - INTERVAL '90 days'
        GROUP BY user_id
    )
SELECT
    au.first_name,
    COALESCE(ro.order_count, 0) as orders,
    COALESCE(ro.total, 0) as spent
FROM active_users au
LEFT JOIN recent_orders ro ON au.id = ro.user_id
ORDER BY spent DESC;

-- ====== JSONB ЗАПИТИ ======

-- === 1. БАЗОВІ ОПЕРАТОРИ ДОСТУПУ ===

-- Оператор -> повертає JSON (для ланцюжків)
-- Оператор ->> повертає TEXT (для фінального значення)

-- Знайти користувачів з темною темою
SELECT first_name, settings->>'theme' as theme
FROM users
WHERE settings->>'theme' = 'dark';

-- Користувачі з увімкненими сповіщеннями
SELECT first_name, email, settings->>'notifications' as notifications
FROM users
WHERE settings->>'notifications' = 'true';

-- Різниця між -> і ->>
SELECT
    first_name,
    settings->'theme' as theme_json,      -- Повертає JSON: "dark"
    settings->>'theme' as theme_text,     -- Повертає TEXT: dark
    pg_typeof(settings->'theme') as json_type,
    pg_typeof(settings->>'theme') as text_type
FROM users
LIMIT 2;

-- === 2. РОБОТА З АТРИБУТАМИ ТОВАРІВ ===

-- Товари з 5G
SELECT name, price, attributes->>'storage' as storage
FROM products
WHERE attributes->>'5G' = 'true';

-- Чорні товари
SELECT name, category_id, attributes->>'color' as color
FROM products
WHERE attributes->>'color' = 'black';

-- Товари з пам'яттю більше 128GB (конвертація в число)
SELECT
    name,
    attributes->>'storage' as storage,
    (attributes->>'storage')::TEXT as storage_text
FROM products
WHERE attributes ? 'storage';

-- === 3. ОПЕРАТОРИ ІСНУВАННЯ (?  ?&  ?|) ===

-- ? - чи існує ключ
SELECT first_name, settings
FROM users
WHERE settings ? 'newsletter';

-- ?& - чи існують ВСІ ключі
SELECT first_name, settings
FROM users
WHERE settings ?& ARRAY['theme', 'language', 'notifications'];

-- ?| - чи існує ХОЧА Б ОДИН з ключів
SELECT first_name, settings
FROM users
WHERE settings ?| ARRAY['newsletter', 'dark_mode'];

-- === 4. ОПЕРАТОРИ ВКЛЮЧЕННЯ (@>  <@) ===

-- @> - чи містить ліва сторона праву (супермножина)
-- Знайти користувачів з українською мовою
SELECT first_name, settings
FROM users
WHERE settings @> '{"language": "uk"}';

-- Знайти користувачі з темною темою ТА увімкненими сповіщеннями
SELECT first_name, settings
FROM users
WHERE settings @> '{"theme": "dark", "notifications": true}';

-- <@ - чи міститься ліва сторона в правій (підмножина)
SELECT first_name, settings
FROM users
WHERE '{"theme": "dark"}'::jsonb <@ settings;

-- === 5. РОБОТА З МАСИВАМИ В JSONB ===

-- Створимо додаткову таблицю для демонстрації масивів
CREATE TEMPORARY TABLE events (
    id SERIAL PRIMARY KEY,
    name TEXT,
    metadata JSONB
);

INSERT INTO events (name, metadata) VALUES
('User Login', '{"user_id": 1, "ip": "192.168.1.1", "tags": ["auth", "success"]}'),
('Purchase', '{"user_id": 2, "amount": 150.50, "items": ["laptop", "mouse"], "tags": ["sale", "electronics"]}'),
('Page View', '{"user_id": 1, "page": "/products", "tags": ["analytics"]}'),
('Error', '{"user_id": 3, "error_code": 500, "tags": ["error", "critical", "server"]}');

-- Доступ до елементів масиву (індексація з 0)
SELECT
    name,
    metadata->'tags'->0 as first_tag,
    metadata->'tags'->1 as second_tag,
    metadata->>'tags' as all_tags_text
FROM events;

-- Перевірити чи масив містить значення
SELECT name, metadata->'tags' as tags
FROM events
WHERE metadata->'tags' @> '["error"]';

-- Знайти події з тегом "success" або "sale"
SELECT name, metadata->'tags' as tags
FROM events
WHERE metadata->'tags' ?| ARRAY['success', 'sale'];

-- === 6. JSONB ФУНКЦІЇ ===

-- jsonb_each() - розгорнути JSON в рядки (key-value пари)
SELECT
    first_name,
    (jsonb_each(settings)).*
FROM users
WHERE first_name = 'Олена';

-- jsonb_object_keys() - отримати всі ключі
SELECT
    first_name,
    jsonb_object_keys(settings) as setting_key
FROM users
LIMIT 1;

-- jsonb_array_elements() - розгорнути масив в рядки
SELECT
    name,
    jsonb_array_elements(metadata->'tags') as tag
FROM events
WHERE metadata ? 'tags';

-- jsonb_array_elements_text() - те саме але як TEXT
SELECT
    name,
    jsonb_array_elements_text(metadata->'tags') as tag
FROM events
WHERE name = 'Error';

-- jsonb_array_length() - довжина масиву
SELECT
    name,
    jsonb_array_length(metadata->'tags') as tags_count
FROM events
WHERE metadata ? 'tags';

-- === 7. ДОДАВАННЯ ЗНАЧЕНЬ В JSONB ===

-- СПОСІБ 1: Додати нове поле через jsonb_set()
-- Синтаксис: jsonb_set(target, path, new_value, create_if_missing)

-- Спочатку подивимось що є
SELECT first_name, settings FROM users WHERE first_name = 'Олена';

-- Додати нове поле "premium" (тільки перегляд, не змінює базу)
SELECT
    first_name,
    settings as old_settings,
    jsonb_set(settings, '{premium}', 'true', true) as new_settings
FROM users
WHERE first_name = 'Олена';

-- РЕАЛЬНЕ ДОДАВАННЯ В БАЗУ:
UPDATE users
SET settings = jsonb_set(settings, '{premium}', 'true', true)
WHERE first_name = 'Олена';

-- Перевіримо результат
SELECT first_name, settings FROM users WHERE first_name = 'Олена';

-- СПОСІБ 2: Додати через оператор || (merge)
-- || об'єднує два JSON об'єкти (якщо ключ існує - перезапише)

-- Додати кілька полів одночасно
UPDATE users
SET settings = settings || '{"vip": true, "discount": 10}'::jsonb
WHERE first_name = 'Ірина';

SELECT first_name, settings FROM users WHERE first_name = 'Ірина';

-- СПОСІБ 3: Додати вкладений (nested) об'єкт
-- Створимо структуру preferences.email з вкладеними полями

UPDATE users
SET settings = jsonb_set(
    settings,
    '{preferences}',
    '{"email": {"frequency": "daily", "format": "html"}}'::jsonb,
    true  -- створити якщо не існує
)
WHERE first_name = 'Максим';

SELECT first_name, settings->'preferences' as prefs FROM users WHERE first_name = 'Максим';

-- СПОСІБ 4: Додати елемент в масив
-- Створимо таблицю з масивами для демонстрації
CREATE TEMPORARY TABLE user_tags (
    user_id INT,
    tags JSONB
);

INSERT INTO user_tags VALUES
(1, '["student", "active"]'::jsonb),
(2, '["teacher"]'::jsonb);

SELECT * FROM user_tags;

-- Додати новий тег в масив (через ||)
UPDATE user_tags
SET tags = tags || '"premium"'::jsonb
WHERE user_id = 1;

SELECT * FROM user_tags WHERE user_id = 1;

-- Додати кілька тегів одночасно
UPDATE user_tags
SET tags = tags || '["verified", "moderator"]'::jsonb
WHERE user_id = 2;

SELECT * FROM user_tags WHERE user_id = 2;

-- === 8. ОНОВЛЕННЯ (UPDATE) ЗНАЧЕНЬ В JSONB ===

-- СПОСІБ 1: Оновити існуюче поле через jsonb_set()

-- Змінити тему на "light" для Олени
UPDATE users
SET settings = jsonb_set(settings, '{theme}', '"light"')
WHERE first_name = 'Олена';

SELECT first_name, settings->>'theme' as theme FROM users WHERE first_name = 'Олена';

-- Оновити кілька полів послідовно
UPDATE users
SET settings = jsonb_set(
    jsonb_set(settings, '{theme}', '"auto"'),
    '{language}', '"en"'
)
WHERE first_name = 'Андрій';

SELECT first_name, settings FROM users WHERE first_name = 'Андрій';

-- СПОСІБ 2: Оновити через || (перезапише ключі що існують)

UPDATE users
SET settings = settings || '{"theme": "dark", "notifications": false}'::jsonb
WHERE first_name = 'Софія';

SELECT first_name, settings FROM users WHERE first_name = 'Софія';

-- СПОСІБ 3: Оновити вкладене (nested) значення

-- Спочатку створимо вкладену структуру якщо її немає
UPDATE users
SET settings = settings || '{"preferences": {"email": "daily", "sms": "never"}}'::jsonb
WHERE first_name = 'Тарас';

-- Тепер оновимо тільки preferences.email
UPDATE users
SET settings = jsonb_set(settings, '{preferences, email}', '"weekly"')
WHERE first_name = 'Тарас';

SELECT first_name, settings->'preferences' as prefs FROM users WHERE first_name = 'Тарас';

-- СПОСІБ 4: Оновити якщо умова виконується (conditional update)

-- Змінити тему тільки якщо вона зараз "light"
UPDATE users
SET settings = jsonb_set(settings, '{theme}', '"dark"')
WHERE settings->>'theme' = 'light';

-- Перевіримо скільки користувачів з темною темою
SELECT
    settings->>'theme' as theme,
    COUNT(*) as count
FROM users
GROUP BY settings->>'theme';

-- СПОСІБ 5: Числові операції з JSON

-- Збільшити discount на 5 для VIP користувачів
UPDATE users
SET settings = jsonb_set(
    settings,
    '{discount}',
    (COALESCE((settings->>'discount')::INT, 0) + 5)::TEXT::jsonb
)
WHERE settings->>'vip' = 'true';

SELECT first_name, settings->'discount' as discount FROM users WHERE settings ? 'discount';

-- === 9. ВИДАЛЕННЯ (DELETE) ЗНАЧЕНЬ З JSONB ===

-- СПОСІБ 1: Видалити один ключ (оператор -)

-- Спочатку подивимось хто має newsletter
SELECT first_name, settings FROM users WHERE settings ? 'newsletter';

-- Видалити поле newsletter
UPDATE users
SET settings = settings - 'newsletter'
WHERE settings ? 'newsletter';

-- Перевіримо - тепер нікого не має
SELECT first_name, settings FROM users WHERE settings ? 'newsletter';

-- СПОСІБ 2: Видалити кілька ключів одночасно

-- Видалимо vip та discount з налаштувань Ірини
SELECT first_name, settings FROM users WHERE first_name = 'Ірина';

UPDATE users
SET settings = settings - ARRAY['vip', 'discount']
WHERE first_name = 'Ірина';

SELECT first_name, settings FROM users WHERE first_name = 'Ірина';

-- СПОСІБ 3: Видалити вкладений ключ (з nested object)

-- Видалити preferences.sms (залишити preferences.email)
UPDATE users
SET settings = jsonb_set(
    settings,
    '{preferences}',
    (settings->'preferences') - 'sms'
)
WHERE first_name = 'Тарас' AND settings->'preferences' ? 'sms';

SELECT first_name, settings->'preferences' as prefs FROM users WHERE first_name = 'Тарас';

-- СПОСІБ 4: Видалити елемент з масиву (за індексом)

-- #- оператор для видалення по шляху (в тому числі з масиву)
UPDATE user_tags
SET tags = tags #- '{0}'  -- Видалити перший елемент (індекс 0)
WHERE user_id = 1;

SELECT * FROM user_tags WHERE user_id = 1;

-- СПОСІБ 5: Видалити елемент з масиву (за значенням)

-- Для цього треба фільтрувати масив
UPDATE user_tags
SET tags = (
    SELECT jsonb_agg(tag)
    FROM jsonb_array_elements_text(tags) tag
    WHERE tag != 'verified'
)
WHERE user_id = 2;

SELECT * FROM user_tags WHERE user_id = 2;

-- СПОСІБ 6: Очистити весь JSONB (встановити NULL або {})

-- Встановити пусті налаштування
UPDATE users
SET settings = '{}'::jsonb
WHERE first_name = 'Максим';

SELECT first_name, settings FROM users WHERE first_name = 'Максим';

-- Або встановити NULL
UPDATE users
SET settings = NULL
WHERE first_name = 'Максим';

SELECT first_name, settings FROM users WHERE first_name = 'Максим';

-- Відновимо налаштування Максиму
UPDATE users
SET settings = '{"theme": "dark", "language": "en", "notifications": true}'::jsonb
WHERE first_name = 'Максим';

-- === 10. РЕАЛЬНІ ПРИКЛАДИ: КОМБІНОВАНІ ОПЕРАЦІЇ ===

-- Приклад 1: Додати "last_updated" при кожній зміні
UPDATE users
SET settings = settings || jsonb_build_object('last_updated', NOW()::TEXT)
WHERE first_name = 'Олена';

-- Приклад 2: Toggle (перемикач) для boolean значень
UPDATE users
SET settings = jsonb_set(
    settings,
    '{notifications}',
    (NOT (settings->>'notifications')::BOOLEAN)::TEXT::jsonb
)
WHERE first_name = 'Андрій';

SELECT first_name, settings->>'notifications' as notifications FROM users WHERE first_name = 'Андрій';

-- Приклад 3: Додати в історію (масив подій)
UPDATE users
SET settings = jsonb_set(
    settings,
    '{history}',
    COALESCE(settings->'history', '[]'::jsonb) ||
    jsonb_build_object(
        'action', 'login',
        'timestamp', NOW()::TEXT,
        'ip', '192.168.1.1'
    )
)
WHERE first_name = 'Софія';

SELECT first_name, settings->'history' as history FROM users WHERE first_name = 'Софія';

-- Приклад 4: Масове оновлення - додати поле всім
UPDATE users
SET settings = settings || '{"app_version": "2.0"}'::jsonb;

SELECT COUNT(*) as users_with_app_version
FROM users
WHERE settings ? 'app_version';

-- Приклад 5: Видалити застарілі поля у всіх
UPDATE users
SET settings = settings - 'app_version';

-- Очистимо тимчасову таблицю
DROP TABLE IF EXISTS user_tags;

-- === 11. ПОБУДОВА JSON ІЗ SQL ===

-- jsonb_build_object() - створити JSON з пар ключ-значення
SELECT jsonb_build_object(
    'name', 'Новий Користувач',
    'email', 'new@example.com',
    'age', 25,
    'active', true
) as new_user;

-- jsonb_build_array() - створити масив
SELECT jsonb_build_array(1, 2, 'три', true, null) as demo_array;

-- to_jsonb() - конвертувати SQL значення в JSONB
SELECT to_jsonb(users) as user_json
FROM users
LIMIT 1;

-- json_agg() - агрегувати рядки в JSON масив
SELECT
    c.name as category,
    json_agg(
        json_build_object(
            'name', p.name,
            'price', p.price
        )
    ) as products
FROM categories c
JOIN products p ON c.id = p.category_id
GROUP BY c.id, c.name
LIMIT 2;

-- === 12. СКЛАДНІ ЗАПИТИ З JSONB ===

-- Знайти всіх користувачів з конкретними налаштуваннями та створити звіт
SELECT
    first_name || ' ' || COALESCE(last_name, '') as full_name,
    email,
    settings->>'theme' as theme,
    settings->>'language' as language,
    CASE
        WHEN settings->>'notifications' = 'true' THEN 'Увімкнені'
        ELSE 'Вимкнені'
    END as notifications_status,
    CASE
        WHEN settings ? 'newsletter' THEN 'Підписаний'
        ELSE 'Не підписаний'
    END as newsletter_status
FROM users
ORDER BY first_name;

-- Статистика по налаштуванням користувачів
SELECT
    settings->>'theme' as theme,
    COUNT(*) as users_count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 1) as percentage
FROM users
WHERE settings ? 'theme'
GROUP BY settings->>'theme'
ORDER BY users_count DESC;

-- Товари згруповані по кольору (з JSONB)
SELECT
    attributes->>'color' as color,
    COUNT(*) as products_count,
    ROUND(AVG(price), 2) as avg_price
FROM products
WHERE attributes ? 'color'
GROUP BY attributes->>'color'
ORDER BY products_count DESC;

-- === 13. JSONB ІНДЕКСАЦІЯ ===

-- GIN індекс для швидкого пошуку (вже створений раніше)
-- Порівняння швидкості з індексом та без

-- Швидкий пошук з GIN індексом
EXPLAIN ANALYZE
SELECT first_name FROM users
WHERE settings @> '{"theme": "dark"}';

-- === 14. ВАЛІДАЦІЯ JSONB ===

-- Перевірити чи JSONB має правильну структуру
SELECT
    first_name,
    settings,
    CASE
        WHEN settings ? 'theme' AND settings ? 'language' THEN 'Valid'
        ELSE 'Invalid - missing required fields'
    END as validation_status
FROM users;

-- Знайти користувачів з неповними налаштуваннями
SELECT
    first_name,
    settings,
    ARRAY(
        SELECT unnest(ARRAY['theme', 'language', 'notifications'])
        EXCEPT
        SELECT jsonb_object_keys(settings)
    ) as missing_keys
FROM users;

-- === 15. РЕАЛЬНИЙ ПРИКЛАД: ЛОГУВАННЯ АКТИВНОСТІ ===

CREATE TEMPORARY TABLE activity_log (
    id SERIAL PRIMARY KEY,
    user_id INT,
    action TEXT,
    details JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO activity_log (user_id, action, details) VALUES
(1, 'login', '{"ip": "192.168.1.100", "device": "mobile", "os": "iOS"}'),
(1, 'view_product', '{"product_id": 5, "duration_seconds": 45}'),
(2, 'add_to_cart', '{"product_id": 3, "quantity": 2, "price": 52999.00}'),
(2, 'checkout', '{"total": 105998.00, "payment_method": "card", "success": true}'),
(3, 'update_profile', '{"changed_fields": ["email", "phone"], "old_email": "old@example.com"}');

-- Аналіз активності: які дії виконували користувачі
SELECT
    action,
    COUNT(*) as count,
    json_agg(details) as all_details
FROM activity_log
GROUP BY action
ORDER BY count DESC;

-- Знайти всі дії з мобільних пристроїв
SELECT
    user_id,
    action,
    details->>'device' as device,
    created_at
FROM activity_log
WHERE details->>'device' = 'mobile';

-- Сума всіх успішних платежів
SELECT
    SUM((details->>'total')::NUMERIC) as total_revenue
FROM activity_log
WHERE action = 'checkout' AND details->>'success' = 'true';

-- Очистити тимчасові таблиці
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS activity_log;

-- ====== FULL-TEXT SEARCH ======

-- Пошук статей про PostgreSQL
SELECT title,
       LEFT(body, 100) || '...' as preview
FROM articles
WHERE to_tsvector('ukrainian', title || ' ' || body) @@ to_tsquery('ukrainian', 'PostgreSQL');

-- Пошук про індекси АБО продуктивність
SELECT title
FROM articles
WHERE to_tsvector('ukrainian', body) @@ to_tsquery('ukrainian', 'індекси | продуктивність');

-- Пошук про бази даних ТА оптимізацію
SELECT title
FROM articles
WHERE to_tsvector('ukrainian', body) @@ to_tsquery('ukrainian', 'баз & даних & оптимізація');

-- ====== ПАГІНАЦІЯ ======

-- Класична пагінація (LIMIT/OFFSET)
-- Сторінка 1
SELECT name, price FROM products ORDER BY id LIMIT 5 OFFSET 0;

-- Сторінка 2
SELECT name, price FROM products ORDER BY id LIMIT 5 OFFSET 5;

-- Keyset пагінація (краще для великих даних)
-- Перша сторінка
SELECT id, name, price FROM products ORDER BY id LIMIT 5;

-- Наступна сторінка (припустимо останній ID з попередньої = 5)
SELECT id, name, price FROM products WHERE id > 5 ORDER BY id LIMIT 5;

-- ====== АНАЛІТИКА ======

-- Топ-5 користувачів по витратам
SELECT
    u.first_name,
    u.email,
    COUNT(o.id) as orders_count,
    COALESCE(SUM(o.total_amount), 0) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.first_name, u.email
ORDER BY total_spent DESC
LIMIT 5;

-- Найпопулярніші товари (по кількості продажів)
SELECT
    p.name,
    COUNT(oi.id) as times_sold,
    SUM(oi.quantity) as total_quantity,
    SUM(oi.price * oi.quantity) as revenue
FROM products p
JOIN order_items oi ON p.id = oi.product_id
JOIN orders o ON oi.order_id = o.id
WHERE o.status != 'cancelled'
GROUP BY p.id, p.name
ORDER BY times_sold DESC
LIMIT 5;

-- Конверсія замовлень по статусах
SELECT
    status,
    COUNT(*) as count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
FROM orders
GROUP BY status
ORDER BY count DESC;

-- Середній час доставки
SELECT
    ROUND(AVG(EXTRACT(EPOCH FROM (delivered_at - created_at)) / 86400), 1) as avg_days
FROM orders
WHERE delivered_at IS NOT NULL;

-- ============================================
-- 5. EXPLAIN ANALYZE (Аналіз продуктивності)
-- ============================================

-- Порівняйте ці два запити:

-- БЕЗ індексу (повільно)
EXPLAIN ANALYZE
SELECT * FROM users WHERE email = 'olena.kovalenko@gmail.com';

-- З індексом (швидко) - використовує idx_users_email

-- Пошук по JSONB (використовує GIN індекс)
EXPLAIN ANALYZE
SELECT * FROM users WHERE settings->>'theme' = 'dark';

-- ============================================
-- 6. КОРИСНІ КОМАНДИ
-- ============================================

-- Переглянути структуру таблиці
-- \d users

-- Переглянути всі таблиці
-- \dt

-- Переглянути всі індекси таблиці
-- \di

-- Переглянути розмір таблиць
-- SELECT
--     schemaname,
--     tablename,
--     pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
-- FROM pg_tables
-- WHERE schemaname = 'public'
-- ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- ============================================
-- КІНЕЦЬ ДЕМО
-- ============================================

-- ============================================
-- ЩО ВИ ТЕПЕР МОЖЕТЕ РОБИТИ:
-- ============================================

-- 1. АГРЕГАТНІ ФУНКЦІЇ
--    - COUNT, SUM, AVG, MIN, MAX з GROUP BY

-- 2. ТЕКСТОВІ ФУНКЦІЇ
--    - UPPER, LOWER, LENGTH, SUBSTRING, TRIM, REPLACE, CONCAT

-- 3. ДАТИ ТА ЧАС
--    - EXTRACT, DATE_TRUNC, AGE, INTERVAL, NOW

-- 4. МАТЕМАТИКА
--    - ROUND, CEIL, FLOOR, MOD, ABS

-- 5. JSONB (15 РОЗДІЛІВ!)
--    1. Базові оператори (-> і ->>)
--    2. Робота з атрибутами товарів
--    3. Оператори існування (?, ?&, ?|)
--    4. Оператори включення (@>, <@)
--    5. Робота з масивами в JSON
--    6. Функції (jsonb_each, jsonb_array_elements, jsonb_set)
--    7. ✨ ДОДАВАННЯ в JSONB (jsonb_set, ||, вкладені об'єкти, масиви)
--    8. ✨ ОНОВЛЕННЯ JSONB (UPDATE реальні приклади, умовні оновлення)
--    9. ✨ ВИДАЛЕННЯ з JSONB (-, масиви, вкладені ключі, очищення)
--    10. ✨ КОМБІНОВАНІ ОПЕРАЦІЇ (історія, toggle, масові оновлення)
--    11. Побудова JSON з SQL (jsonb_build_object, json_agg)
--    12. Складні запити та аналітика
--    13. JSONB індексація та продуктивність
--    14. Валідація структури
--    15. Реальний приклад: логування активності

-- 6. FULL-TEXT SEARCH
--    - Пошук українською та англійською
--    - Оператори AND (&) та OR (|)

-- 7. ПАГІНАЦІЯ
--    - LIMIT/OFFSET (класична)
--    - Keyset пагінація (для великих даних)

-- 8. АНАЛІТИКА
--    - Топ користувачів, популярні товари
--    - Конверсія, статистика

-- 9. ПРОДУКТИВНІСТЬ
--    - EXPLAIN ANALYZE
--    - Порівняння з індексами та без

-- 10. ПІДЗАПИТИ та CTE (WITH)
--     - Складні аналітичні запити

-- ============================================
-- ШВИДКИЙ ДОВІДНИК: JSONB ОПЕРАЦІЇ
-- ============================================

/*
=== ЧИТАННЯ ===
settings->'theme'              -- Повертає JSON
settings->>'theme'             -- Повертає TEXT
settings->'prefs'->'email'     -- Вкладені об'єкти
settings->'tags'->0            -- Перший елемент масиву

=== ПЕРЕВІРКА ІСНУВАННЯ ===
settings ? 'theme'                              -- Ключ існує?
settings ?& ARRAY['theme', 'language']          -- Всі ключі існують?
settings ?| ARRAY['premium', 'vip']             -- Хоча б один існує?
settings @> '{"theme": "dark"}'                 -- Містить ці пари?

=== ДОДАВАННЯ ===
-- Один ключ:
UPDATE users SET settings = jsonb_set(settings, '{premium}', 'true', true);

-- Кілька ключів (merge):
UPDATE users SET settings = settings || '{"vip": true, "discount": 10}'::jsonb;

-- Вкладений об'єкт:
UPDATE users SET settings = jsonb_set(settings, '{prefs, email}', '"daily"', true);

-- В масив:
UPDATE user_tags SET tags = tags || '"new_tag"'::jsonb;

=== ОНОВЛЕННЯ ===
-- Змінити значення:
UPDATE users SET settings = jsonb_set(settings, '{theme}', '"light"');

-- Кілька полів:
UPDATE users SET settings = settings || '{"theme": "dark", "lang": "en"}'::jsonb;

-- Числа (increment):
UPDATE users SET settings = jsonb_set(
    settings, '{count}',
    ((settings->>'count')::INT + 1)::TEXT::jsonb
);

=== ВИДАЛЕННЯ ===
-- Один ключ:
UPDATE users SET settings = settings - 'newsletter';

-- Кілька ключів:
UPDATE users SET settings = settings - ARRAY['vip', 'discount'];

-- З масиву (за індексом):
UPDATE tags SET data = data #- '{tags, 0}';

-- З масиву (за значенням - складніше):
UPDATE tags SET data = (
    SELECT jsonb_agg(elem)
    FROM jsonb_array_elements_text(data->'tags') elem
    WHERE elem != 'unwanted'
);

-- Очистити все:
UPDATE users SET settings = '{}'::jsonb;  -- або NULL

=== ПОБУДОВА JSON ===
jsonb_build_object('key1', 'value1', 'key2', 123)
jsonb_build_array(1, 2, 'three', true)
json_agg(row_to_json(table_name))

=== РОЗГОРТАННЯ ===
jsonb_each(settings)                    -- Пари ключ-значення
jsonb_object_keys(settings)             -- Тільки ключі
jsonb_array_elements(tags)              -- Елементи масиву як JSON
jsonb_array_elements_text(tags)         -- Елементи масиву як TEXT
jsonb_array_length(tags)                -- Довжина масиву

=== КОРИСНІ ПОРАДИ ===
- Завжди використовуйте JSONB (не JSON) - він швидший
- Створюйте GIN індекси: CREATE INDEX ON table USING GIN (jsonb_column);
- Для часткового пошуку: column @> '{"key": "value"}'
- Перетворюйте типи: (column->>'number')::INT
- || перезаписує існуючі ключі
- jsonb_set створює ключі якщо create_if_missing = true
*/

-- База даних створена успішно! Тепер можна експериментувати з запитами.
SELECT 'База даних створена успішно! Тепер можна експериментувати з запитами.' as message;
