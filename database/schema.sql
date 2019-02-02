DROP DATABASE toDoList; 

CREATE DATABASE toDoList;

USE toDoList;

CREATE TABLE todos (
    todo_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    todo VARCHAR(30) NOT NULL,
    priority_id INT NOT NULL 
);
-- CREATE TABLE priority (
--     FOREIGN KEY priorityLow REFERENCES priority_id
--     priorityHigh
-- );

