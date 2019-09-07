FROM node:10-alpine

WORKDIR /mytestapp

ADD package.json /mytestapp/package.json

RUN npm install

ADD . /mytestapp