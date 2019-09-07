*if dont have psql docker images then open terminal and run:
    -docker run --name postgres-docker -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
        -postgres-docker -> container name
        -POSTGRES_PASSWORD -> your psql password  in environement
        -p ports
*to run docker container on terminal:
    -docker exec -it postgres-docker bash

*run this to connect psql
    -psql -U postgres

*for basic example create table using this command
    -CREATE TABLE public.persons (id int PRIMARY KEY, lastName varchar(255), firstName varchar(255));
*to check all images
    -docker images -a
*to check your container is running or not
    -docker ps