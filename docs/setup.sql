-- ==========================================
-- Частина 1: Таблиці для вивчення JOIN
-- ==========================================

-- 1. Створення таблиці Students
CREATE TABLE IF NOT EXISTS Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Очищення таблиці перед вставкою (щоб уникнути дублікатів при повторному запуску)
TRUNCATE TABLE Students;

-- Вставка даних
INSERT INTO Students (id, name) VALUES 
(1, 'Оля'),
(2, 'Петро'),
(3, 'Іван');

-- 2. Створення таблиці Grades
CREATE TABLE IF NOT EXISTS Grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject VARCHAR(255) NOT NULL,
    grade INT
);

TRUNCATE TABLE Grades;

-- Вставка даних (включаючи "сироту" з student_id=4)
INSERT INTO Grades (id, student_id, subject, grade) VALUES 
(10, 1, 'Math', 95),
(11, 2, 'History', 88),
(12, 4, 'Physics', 70);

-- ==========================================
-- Частина 2: Таблиця для вивчення JSON
-- ==========================================

-- 3. Створення таблиці Products
CREATE TABLE IF NOT EXISTS Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    attributes JSON
);

TRUNCATE TABLE Products;

-- Вставка даних з JSON
INSERT INTO Products (name, attributes) VALUES 
('T-Shirt', '{"size": "L", "color": "blue"}'),
('MacBook', '{"cpu": "M1", "ram": "16GB", "ports": ["USB-C", "Jack"]}');

-- ------------------------------------------
-- Готово! Тепер можна виконувати запити з лекції.
-- ------------------------------------------
