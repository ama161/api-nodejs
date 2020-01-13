CREATE DATABASE	apinodejs;

use apinodejs;

CREATE TABLE user(
	id INT UNSIGNED auto_increment PRIMARY KEY,
	name CHAR(50) NOT NULL,
	address CHAR(50) NOT NULL,
	phone CHAR(15) NOT NULL
);

SHOW TABLES;

describe user;

INSERT INTO user (name, address, phone) VALUES ('andrea', 'c/ Mdc. Marco nº 3', '123456789');