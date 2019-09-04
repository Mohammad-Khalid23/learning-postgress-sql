const Pool = require('pg').Pool;

const pool = new Pool(
{
user:'me',
host:'localhost',
database:'crudapi',
password:'abc',
port:5432
})
console.log("quries file");
const getUsers = async (request,response)=>{
try{
	console.log("get user func");
	const res =  await pool.query('SELECT * FROM users ORDER BY id ASC');
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
	const{name,email}=request.body;
	console.log("create user func");
	const res =  await pool.query('INSERT INTO users(name.email) VALUES ($1,$2)',[name,email]);
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
	const{name,email}=request.body;
	console.log("create user func");
	const res =  await pool.query('UPDATE users SET name=$1,email=$2 WHERE id=$3,[name,email,id]);
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