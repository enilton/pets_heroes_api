/*const mysql = require("mysql");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dr@072019",
    database: "petsheroes"
});

conexao.connect((err)=>{
    if(err) console.log(err)
    console.log("conectado ao banco!")
})


module.exports = conexao*/
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:petsheroes@localhost:5432/petsheroes';

const client = new pg.Client(connectionString);
client.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("conectado");
    }
});
module.exports = client