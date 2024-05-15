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
    image VARCHAR,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    price INT NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 0,
    merchant_id INT NOT NULL,
    CONSTRAINT products_pk PRIMARY KEY (id),
    CONSTRAINT products_reference UNIQUE (reference),
    CONSTRAINT products_merchant_fk FOREIGN KEY (merchant_id) REFERENCES merchants(id)
);

-- -- Supprimer les données existantes
-- DELETE FROM merchants;
-- DELETE FROM products;

-- -- Insérer les marchands avec des nouveaux mots de passe cohérents hachés de 161 caractères
-- INSERT INTO merchants (siret, email, "password") VALUES 
--     ('11111234567890', 'morelstephane@neuf.fr', 'b89b406a0d685e0f752f79e9e5305614:ecdbd4c0f7946fc738497bd7f1e53619869fa3abfbd2c29e64b6d393130eb1cf98e1e1d74d5700c8d5f1e572b75732e5c31b09902b5e31031e15f18b6af12b74'),
--     ('23456789012345', 'jane.smith@example.com', '1e696131565a8d2f553643559bb3a2e6:2497e8de940934e4b73ff9d824d2a59ffc34f0b0a341dc234aae7ad1f40838c2726398a50b652bcb20228e8276d8203477ff460ee4d440e49b5ce0e55d67641f');

-- -- Insérer les produits avec l'ID du marchand
-- INSERT INTO products (reference, name, description, merchant_id) VALUES
--     ('CD123456', 'Livre - Le Petit Prince', 'Un conte philosophique écrit par Antoine de Saint-Exupéry', 1),
--     ('CD234567', 'Téléphone portable - iPhone 13', 'Dernier modèle de téléphone portable Apple avec des fonctionnalités avancées', 2),
--     ('CD345678', 'Robe été', 'Robe légère et fluide parfaite pour les chaudes journées estivales', 1),
--     ('CD456789', 'Ordinateur portable - Lenovo ThinkPad', 'Ordinateur portable puissant et fiable pour un usage professionnel', 1),
--     ('CD567890', 'Chaussures de course - Nike Air Zoom Pegasus', 'Chaussures de course légères et amorties pour une course confortable', 1),
--     ('CD678901', 'Roman - Harry Potter à école des sorciers', 'Premier livre de la série Harry Potter écrit par J.K. Rowling', 1),
--     ('CD789012', 'Téléviseur - Samsung 4K UHD', 'Téléviseur haute définition avec une qualité image exceptionnelle', 1),
--     ('CD890123', 'Jeans - Levis 501', 'Jeans emblématiques de Levis avec un ajustement classique et confortable', 1),
--     ('CD901234', 'Fruits de saison - Pommes Granny Smith', 'Délicieuses pommes croquantes et juteuses pour une collation saine', 1),
--     ('CD012345', 'Montre - Rolex Submariner', 'Montre de plongée de luxe avec un design emblématique et des caractéristiques exceptionnelles', 2);
