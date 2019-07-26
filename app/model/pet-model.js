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
        connect.query('SELECT * FROM pet WHERE id_pet = ?', id, (err, rows) => {
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
        connect.query('INSERT INTO pet set?', dados, (err, sucess) => {
            if (err) {
                console.log(err);
                return callback(false);
            }
            else {
                console.log("insert success");
                return callback(true);
            }
        })
    }
    setImagens(img, callback){
        connect.query('INSERT INTO img_pets set?', img, (err, sucess) => {
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
    putDados(dados, id, callback){
        connect.query('UPDATE pet set ? WHERE id_pet = ?',[dados, id], (err) => {
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
        connect.query('DELETE FROM pet WHERE id_pet = ?', id, (err) => {
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

