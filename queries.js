const Pool = require('pg').Pool;

const pool = new Pool(
{
user:'postgres',
host:'192.168.2.103',
database:'postgres',
password:'postgres',
port:5432
})
const getUsers = async (request,response)=>{
try{
	console.log("get user func");
	const res =  await pool.query('SELECT * FROM students ORDER BY id ASC');
	console.log('response',res);
	response.send(res.rows); 
}	
catch(error){
	console.log(error);
	response.status(400).json(error);
}
};


const createUser = async (request,response)=>{
try{
	const{firstName,lastName}=request.body;
	console.log("create user func");
	const res =  await pool.query('INSERT INTO students(firstName,lastName) VALUES ($1,$2)',[firstName,lastName]);
	console.log('response',res);
	response.status(200).send(res); 
}	
catch(error){
	console.log(error);
	response.status(400).json(error);
}
};

const updateUser = async (request,response)=>{
try{
	const id = parseInt(request.params.id);
	console.log("id to update",id);
	const{firstName,lastName}=request.body;
	console.log("create user func");
	const res =  await pool.query('UPDATE students SET firstName=$1,lastName=$2 WHERE id=$3',[firstName,lastName,id]);
	console.log('response',res);
	response.status(200).send(res); 
}	
catch(error){
	console.log(error);
	response.status(400).json(error);
}
};

module.exports = {
	getUsers,
	createUser,
	updateUser 
}