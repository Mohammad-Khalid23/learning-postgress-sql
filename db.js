const Pool = require('pg').Pool;

const pool = new Pool(
{
user:'me',
host:'localhost',
database:'crudapi',
password:'abc',
port:5432
})