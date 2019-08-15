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
const pgp = require('pg-promise')({});
const db = pgp('postgres://qqsinypd:se7YU5W7mzkr5h6ombQDG4_96QdRtkkp@tuffi.db.elephantsql.com:5432/qqsinypd');
//const db = pgp(process.env.DATABASE_URL ||'postgres://postgres:petsheroes@localhost:5432/petsheroes');

db.connect()
.then(obj=>{
    console.log("conectado");
})
.catch(error =>{
    console.log(error);
})

module.exports = db