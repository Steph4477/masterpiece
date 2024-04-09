DROP TABLE IF EXISTS products, merchants;

CREATE TABLE merchants(
    id serial,
    siret VARCHAR(14) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR NOT NULL, 
    CONSTRAINT merchants_pk PRIMARY KEY (id),
    CONSTRAINT merchants_siret UNIQUE (siret) 
);

CREATE TABLE products (
    id serial,
    reference VARCHAR(8) NOT NULL,
    name VARCHAR NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 0,
    CONSTRAINT products_pk PRIMARY KEY (id),
    CONSTRAINT products_reference UNIQUE (reference)
);


