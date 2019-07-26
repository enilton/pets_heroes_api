const mysql = require("mysql");

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


module.exports = conexao