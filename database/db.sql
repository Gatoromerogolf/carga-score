-- creando la base de datos
CREATE DATABASE bolillasnegras;

-- seleccionando la base de datos
use bolillasnegras;

-- creating a table
CREATE TABLE jugador (
    id INT(6) unsigned auto_increment primary key,
    nombre varchar(50) not null,
    direccion varchar(100) not null, 
    phone varchar(15)
);

-- to show all tables
show tables;

-- to describe the table
describe jugador;