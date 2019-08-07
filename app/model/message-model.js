const connect = require("../../config/connect");

class Model{
    getAll(callback){
        connect.query('SELECT * FROM mensagens', function(err, rows){
            if (err) {
                console.log(err);
                return callback(err);
            }
            console.log("Sucesso!");
            return callback(rows);
        })
    }
    getOne(id, callback){
        connect.query('SELECT * FROM mensagens WHERE id_mensagem = ?', id, (err, rows) => {
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
        connect.query('INSERT INTO mensagens set?', dados, (err, sucess) => {
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
        connect.query('UPDATE mensagens set ? WHERE id_mensagem = ?',[dados, id], (err) => {
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
        connect.query('DELETE FROM mensagens WHERE id_mensagem = ?', id, (err) => {
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

