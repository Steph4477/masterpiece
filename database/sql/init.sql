-- Supprimer les données existantes dans les tables
DELETE FROM products;
DELETE FROM customers;
DELETE FROM merchants;

-- Supprimer si tables éxistantes
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS merchants;

-- Recréer les tables 
CREATE TABLE merchants (
    id SERIAL,
    siret CHAR(14) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password CHAR(161) NOT NULL,
    CONSTRAINT merchants_pk PRIMARY KEY (id),
    CONSTRAINT merchants_siret UNIQUE (siret)
);

CREATE TABLE products (
    id SERIAL,
    reference CHAR(8) NOT NULL,
    image VARCHAR NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    price INT NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 0,
    merchant_id INT NOT NULL,
    CONSTRAINT products_pk PRIMARY KEY (id),
    CONSTRAINT products_reference UNIQUE (reference),
    CONSTRAINT products_merchant_fk FOREIGN KEY (merchant_id) REFERENCES merchants(id)
);

CREATE TABLE customers (
    id SERIAL,
    reference CHAR(8) NOT NULL,
    image VARCHAR NULL,
    name VARCHAR(100) NOT NULL,
    orders INT NOT NULL DEFAULT 0,
    average INT NOT NULL DEFAULT 0,
    total INT NOT NULL DEFAULT 0,
    merchant_id INT NOT NULL,
    CONSTRAINT customers_pk PRIMARY KEY (id),
    CONSTRAINT customers_reference UNIQUE (reference),
    CONSTRAINT customers_merchant_fk FOREIGN KEY (merchant_id) REFERENCES merchants(id)
);

-- Supprimer les données existantes dans les tables
DELETE FROM products;
DELETE FROM customers;
DELETE FROM merchants;

-- Insérer les marchands avec des nouveaux mots de passe cohérents hachés de 161 caractères
INSERT INTO merchants (siret, email, "password") VALUES 
    ('11111111111111', 'test@example.com', 'd10cf6b3b57788f7b410d363c128eb0d:b8d940b41b58d39fa04bd14ee46b927606bc8fc465413295b1845be7ddf26cba81dc2d9cd6e0b277872c730ea8749675a64c27a285d80118c549a7d4d1a74e73');

-- Insérer les produits avec l'ID du marchand
INSERT INTO products (reference, name, description, stock, price, merchant_id) VALUES
    ('CD123456', 'Livre - Le Petit Prince', 'Un conte philosophique écrit par Antoine de Saint-Exupéry', 1, 1, 1),
    ('CD234567', 'Téléphone portable - iPhone 13', 'Dernier modèle de téléphone portable Apple avec des fonctionnalités avancées', 1, 1, 1),
    ('CD345678', 'Robe été', 'Robe légère et fluide parfaite pour les chaudes journées estivales', 1, 1, 1),
    ('CD456789', 'Ordinateur portable - Lenovo ThinkPad', 'Ordinateur portable puissant et fiable pour un usage professionnel', 1, 1, 1),
    ('CD567890', 'Chaussures de course - Nike Air Zoom Pegasus', 'Chaussures de course légères et amorties pour une course confortable', 1, 1, 1),
    ('CD678901', 'Roman - Harry Potter à école des sorciers', 'Premier livre de la série Harry Potter écrit par J.K. Rowling', 1, 1, 1),
    ('CD789012', 'Téléviseur - Samsung 4K UHD', 'Téléviseur haute définition avec une qualité image exceptionnelle', 1, 1, 1),
    ('CD890123', 'Jeans - Levis 501', 'Jeans emblématiques de Levis avec un ajustement classique et confortable', 1, 1, 1),
    ('CD901234', 'Fruits de saison - Pommes Granny Smith', 'Délicieuses pommes croquantes et juteuses pour une collation saine', 1, 1, 1),
    ('CD012345', 'Montre - Rolex Submariner', 'Montre de plongée de luxe avec un design emblématique et des caractéristiques exceptionnelles', 1, 1, 1);

-- Insérer des customers avec l'ID du marchand 1 ou 2
INSERT INTO customers (reference, name, orders, average, total, merchant_id) VALUES
('CUST001', 'Alice Smith', 10, 50.25, 502.50, 1),
('CUST002', 'Bob Johnson', 5, 100.00, 500.00, 1),
('CUST003', 'Charlie Brown', 8, 75.00, 600.00, 1),
('CUST004', 'Diana Prince', 12, 45.83, 550.00, 1),
('CUST005', 'Eve Davis', 7, 85.71, 600.00, 1);