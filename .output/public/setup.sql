-- Створення таблиці користувачів
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- Створення таблиці замовлень з Foreign Key
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2),
    status VARCHAR(20),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
);

-- Наповнення даними
INSERT INTO users (name, email) VALUES
('Оля', 'olya@mail.com'),
('Петро', 'petro@mail.com'),
('Іван', 'ivan@mail.com'),
('Марія', 'maria@mail.com');

INSERT INTO orders (user_id, amount, status) VALUES
(1, 200.00, 'compl'),
(1, 500.00, 'pend'),
(2, 300.00, 'compl');
