DROP DATABASE IF EXISTS bz_DB;
CREATE DATABASE bz_DB;

USE bz_db;


CREATE TABLE items (

    item_id INT NOT NULL AUTO_INCREMENT,
    product VARCHAR(30) NULL,
    department VARCHAR(30) NULL,
    price DECIMAL(10,2) NULL,
    stock INT NULL,
    PRIMARY KEY (item_id)

);

INSERT INTO items (product, department, price, stock) VALUES
("shampoo", "bathroom supplies", 4.75, 700),
("hairspray", "cosmetics", 3.00, 350),
("toilet paper", "bathroom supplies", 9.50, 3500),
("golf clubs", "sport supplies", 299.99, 50),
("hair gell", "cosmetics", 2.99, 400),
("basketball", "sport supplies", 5.35, 1000),
("keyboard", "office supplies", 35.00, 300),
("rubber bands", "office supplies", 1.75, 4000),
("blanket", "bedroom supplies", 20.00, 100),
("pillow", "bedroom supplies", 15.75, 300);

SELECT * FROM items