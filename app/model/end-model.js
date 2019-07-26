const connect = require("../../config/connect");

class Model{
    getAll(callback){
        connect.query('SELECT * FROM endereco', function(err, rows){
            if (err) {
                console.log(err);
                return callback(err);
            }
            console.log("Sucesso!");
            return callback(rows);
        })
    }
    getOne(id, callback){
        connect.query('SELECT * FROM endereco WHERE id_endereco = ?', id, (err, rows) => {
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
        connect.query('INSERT INTO endereco set?', dados, (err, sucess) => {
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
    
    putDados(dados, id, callback){
        connect.query('UPDATE endereco set ? WHERE id_endereco = ?',[dados, id], (err) => {
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
        connect.query('DELETE FROM endereco WHERE id_endereco = ?', id, (err) => {
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

