const connect = require("../../config/connect");

class Model{
    getAll(callback){
        connect.query('SELECT * FROM pet', function(err, rows){
            if (err) {
                console.log(err);
                return callback(err);
            }
            console.log("Sucesso!");
            return callback(rows);
        })
    }
    getOne(id, callback){
        connect.query('SELECT * FROM pet WHERE id_pet = $1', [id], (err, rows) => {
            if (err) {
                console.log(err)
                return callback(err);
            }
            else {
                console.log("Sucesso!");
                return callback(rows);
            }
        })
    }
    
    setDados(dados, callback){
        connect.query('INSERT INTO pet set $1', [dados], (err, result) => {
            if (err) {
                console.log(err);
                return callback(false);
            }
            else {
                console.log(result.insertId);
                return callback(result.insertId);
            }
        })
    }
    setImagens(img, callback){
        connect.query('INSERT INTO img_pets set $1', [img], (err, sucess) => {
            if (err) {
                console.log(err);
                return callback(false);
            }
            else {
                console.log("insert success");
                return callback(true);
            }
        });
    }
    getImages(id, callback){
        connect.query('SELECT * FROM img_pets WHERE id_pet = $1', [id], (err, rows) => {
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
    putDados(dados, id, callback){
        connect.query('UPDATE pet set $1 WHERE id_pet = $2',[dados, id], (err) => {
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
        connect.query('DELETE FROM pet WHERE id_pet = $1', [id], (err) => {
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
}

module.exports = Model

