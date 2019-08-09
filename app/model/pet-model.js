const connect = require("../../config/connect");

class Model{
    getAll(callback){
        connect.query('SELECT * FROM pet')
        .then(obj=>{
            return callback(obj);
        })
        .catch(error =>{
            return callback(error);
        })
    }
    getOne(id, callback){
        connect.query('SELECT * FROM pet WHERE id_pet = $1', [id])
        .then(obj=>{
            return callback(obj);
        })
        .catch(error =>{
            return callback(error);
        })
    }
    
    setDados(dados, callback){
        connect.one('INSERT INTO pet (${this:name}) VALUES(${this:csv}) RETURNING id_pet', dados)
        .then(data => {
            return callback(data.id_pet);
        })
        .catch(error => {
            return callback(false);
        });
    }
    setImagens(img, callback){
        connect.query('INSERT INTO img_pets (${this:name}) VALUES(${this:csv})', img)
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
    getImages(id, callback){
        connect.query('SELECT * FROM img_pets WHERE id_pet = $1', [id])
        .then(obj=>{
            return callback(obj);
        })
        .catch(error =>{
            return callback(error);
        })
    }
    putDados(dados, id, callback){
        connect.query('UPDATE pet SET (${dados:name}) = (${dados:csv}) WHERE id_pet = ${id}', {id, dados})
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
    
    delete(id, callback){
        connect.query('DELETE FROM pet WHERE id_pet = $1', [id])
        .then(data => {
            return callback(true);
        })
        .catch(error => {
            return callback(false);
        });
    }
}

module.exports = Model

