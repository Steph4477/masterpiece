-- DROP TABLE IF EXISTS products, merchants;

CREATE TABLE merchants (
    id SERIAL,
    siret VARCHAR(14) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password CHAR(161) NOT NULL,
    CONSTRAINT merchants_pk PRIMARY KEY (id),
    CONSTRAINT merchants_siret UNIQUE (siret)
);

CREATE TABLE products (
    id SERIAL,
    reference VARCHAR(8) NOT NULL,
    image VARCHAR,
    name VARCHAR NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 0,
    merchant_id INT,
    CONSTRAINT products_pk PRIMARY KEY (id),
    CONSTRAINT products_reference UNIQUE (reference),
    CONSTRAINT products_merchant_fk FOREIGN KEY (merchant_id) REFERENCES merchants(id)
);


