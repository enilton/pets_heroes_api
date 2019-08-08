const connect = require("../../config/connect");

class Model{
    getAll(callback){
        connect.query('SELECT * FROM usuario')
        .then(obj=>{
            return callback(obj);
        })
        .catch(error =>{
            return callback(error);
        })
    }
    getOne(id, callback){
        connect.query('SELECT * FROM usuario WHERE id_usuario = $1', [id])
        .then(obj=>{
            return callback(obj);
        })
        .catch(error =>{
            return callback(error);
        })
    }
    
    setDados(dados, callback){
        connect.query('INSERT INTO usuario(${this:name}) VALUES(${this:csv})', dados)
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
    putDados(dados, id, callback){
        connect.query('UPDATE usuario set $1 WHERE id_usuario = $2',[dados, id], (err) => {
            if (err) {
                console.log(err);
                return callback(false);
            }
            else {
                console.log("update success");
                return callback(true);
            }
        })
    }
    
    delete(id, callback){
        connect.query('DELETE FROM usuario WHERE id_usuario = $1', [id], (err) => {
            if (err) {
                console.log(err);
                return callback(false);
            }
            else {
                console.log("delete success");
                return callback(true);
            }
        })
    }
    validaEmail(email, callback){
        connect.query('SELECT * FROM usuario WHERE email = $1', [email], (err, rows) => {
            if (err) {
                console.log(err)
                return callback(err);
            }
            else {
                console.log("Sucesso!");
                return callback(rows);
            }
        });
    }
}

module.exports = Model

