-- DB username and password should be set in environment.--
CREATE DATABASE testdb;
CREATE USER testuser WITH ENCRYPTED PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE testdb TO testuser;
\c testdb testuser
CREATE TABLE public.students(id serial PRIMARY KEY,firstName varchar(255),lastName varchar(255));
CREATE TABLE public.teachers(id serial PRIMARY KEY,name varchar(255),course varchar(255));
