DROP TABLE IF EXISTS products, merchants, products_sold;

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
    name VARCHAR(15) NOT NULL,
    description TEXT NOT NULL,
    CONSTRAINT products_pk PRIMARY KEY (id),
    CONSTRAINT products_reference UNIQUE (reference)
);

CREATE TABLE products_sold (
    id serial,
    merchant_id INT NOT NULL,
    product_id INT NOT NULL,
    price INT NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 0,
    CONSTRAINT products_sold_pk PRIMARY KEY (id),
    CONSTRAINT products_sold_merchant_product_ukey UNIQUE (merchant_id, product_id),
    CONSTRAINT products_sold_merchant_id_fk FOREIGN KEY (merchant_id) REFERENCES merchants(id),
    CONSTRAINT products_sold_product_id_fk FOREIGN KEY (product_id) REFERENCES products(id)   
);


