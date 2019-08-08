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
        connect.query('UPDATE usuario SET (${dados:name}) = (${dados:csv}) WHERE id_usuario = ${id}', {id, dados})
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
    
    delete(id, callback){
        connect.query('DELETE FROM usuario WHERE id_usuario = $1', [id])
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
    validaEmail(email, callback){
        connect.query('SELECT * FROM usuario WHERE email = $1', email)
        .then(data => {
            return callback(data);
        })
        .catch(error => {
            return callback(error);
        });
    }
}

module.exports = Model

