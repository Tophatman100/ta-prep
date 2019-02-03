DROP DATABASE IF EXISTS `toDoList`; 

CREATE DATABASE toDoList;

USE toDoList;

DROP TABLE IF EXISTS `todos`;

CREATE TABLE todos (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    todo VARCHAR(30) NOT NULL,
    priority_id INT NOT NULL 
);

DROP TABLE IF EXISTS `priority`; 

CREATE TABLE priority (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    todo_id INT NOT NULL,
    FOREIGN KEY todo_id(id)
    REFERENCES todos(id)
)
-- CREATE TABLE priority (
--     FOREIGN KEY priorityLow REFERENCES priority_id
--     priorityHigh
-- );

