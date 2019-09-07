const Pool = require('pg').Pool;

const pool = new Pool(
{
user:'testuser',
host:'postgres',
database:'testdb',
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

const addTeacher = async (request, response) => {
	try {
		const { name, course } = request.body;
		console.log("create user func");
		const res = await pool.query('INSERT INTO teachers(name,course) VALUES ($1,$2)', [name, course]);
		console.log('response', res);
		response.status(200).send(res);
	}
	catch (error) {
		console.log(error);
		response.status(400).json(error);
	}
};

const updateTeacherDetails = async (request, response) => {
	try {
		const id = parseInt(request.params.id);
		console.log("id to update", id);
		const { name, course } = request.body;
		console.log("create user func");
		const res = await pool.query('UPDATE teachers SET name=$1,course=$2 WHERE id=$3', [name, course, id]);
		console.log('response', res);
		response.status(200).send(res);
	}
	catch (error) {
		console.log(error);
		response.status(400).json(error);
	}
};

const getTeachers = async (request, response) => {
	try {
		console.log("get user func");
		const res = await pool.query('SELECT * FROM teachers ORDER BY id ASC');
		console.log('response', res);
		response.send(res.rows);
	}
	catch (error) {
		console.log(error);
		response.status(400).json(error);
	}
};

module.exports = {
	getUsers,
	createUser,
	updateUser,
	addTeacher,
	getTeachers,
	updateTeacherDetails
}