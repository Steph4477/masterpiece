-- DROP TABLE IF EXISTS products, merchants;

CREATE TABLE merchants (
    id SERIAL PRIMARY KEY,
    siret VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(60) NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    reference VARCHAR(8) NOT NULL UNIQUE,
    name VARCHAR NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 0,
    merchant_id INT,
    CONSTRAINT products_merchant_fk FOREIGN KEY (merchant_id) REFERENCES merchants(id)
);


-- INSERT INTO merchants (siret, email, password) VALUES 
-- ('12345678901234', 'a@gmail.com', 'f486f087342dfc2e09da5f165ba72054:a161b50fd1d308386…3ff68c3f7fca05c8679952e8412c4d2be38e5a9b6b157542f'),
-- ('12345678901235', 'b@gmail.com', '89b3dc61b9bd67c77a2528c6c533209d:204702c70da48e543…fa7525e058dd543bb657b690b27b13ac1ff50c8e30d5c974b');
