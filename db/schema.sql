DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db

USE burger_db;

CREATE TABLE burger(
id INT AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devour BOOLEAN DEFAULT false,
PRIMARY KEY (id)
)

-- SELECT * FROM burgers;