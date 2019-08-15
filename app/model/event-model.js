const connect = require("../../config/connect");

class Model{
    getAll(callback){
        connect.query('SELECT * FROM evento')
        .then(obj=>{
            return callback(obj);
        })
        .catch(error =>{
            return callback(error);
        })
    }
    getOne(id, callback){
        connect.query('SELECT * FROM evento WHERE id_evento = $1', id)
        .then(obj=>{
            return callback(obj);
        })
        .catch(error =>{
            return callback(error);
        })
    }
    
    setDados(dados, callback){
        connect.query('INSERT INTO evento (${this:name}) VALUES(${this:csv})', dados)
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
    
    putDados(dados, id, callback){
        connect.query('UPDATE evento SET (${dados:name}) = (${dados:csv}) WHERE id_evento = ${id}', {id, dados})
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
    
    delete(id, callback){
        connect.query('DELETE FROM evento WHERE id_evento = $1', id)
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
}

module.exports = Model

