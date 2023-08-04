SHOW DATABASES;
CREATE DATABASE name_database
USE name_database;
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
INSERT INTO usuarios(nome, email, idade) VALUES (
    "Joao Gabriel",
    "Joao@gmail.com",
    12
);
DESCRIBE usuarios;
SELECT * from usuarios;
SELECT * from usuarios WHERE idade = 12;
DELETE FROM usuarios WHERE idade = 12;
UPDATE usuarios SET nome = "Luis Não Gabriel" WHERE nome = "Luis Gabriel";
