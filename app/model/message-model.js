const connect = require("../../config/connect");

class Model{
    getAll(callback){
        connect.query('SELECT * FROM mensagens')
        .then(obj=>{
            return callback(obj);
        })
        .catch(error =>{
            return callback(error);
        })
    }
    getOne(id, callback){
        connect.query('SELECT * FROM mensagens WHERE id_mensagem = $1', id)
        .then(obj=>{
            return callback(obj);
        })
        .catch(error =>{
            return callback(error);
        })
    }
    
    setDados(dados, callback){
        connect.query('INSERT INTO mensagens (${this:name}) VALUES(${this:csv})', dados)
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
    
    putDados(dados, id, callback){
        connect.query('UPDATE mensagens SET (${dados:name}) = (${dados:csv}) WHERE id_mensagem = ${id}', {id, dados})
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
    
    delete(id, callback){
        connect.query('DELETE FROM mensagens WHERE id_mensagem = $1', id)
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
}

module.exports = Model

