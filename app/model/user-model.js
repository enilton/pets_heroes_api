const models = require('../../models/index');

class Model{
    getAll(callback){
        models.user
        .findAll({})
        .then(data =>{
            return callback(data);
        })
        .catch(err =>{
            return callback(err);
        });
    }
    getOne(id, callback){
    models.user
    .findByPk(id)
    .then(data =>{
        return callback(data);
    })
    .catch(err =>{
        return callback(err);
    });
    }
    
    setDados(dados, callback){
    models.user
    .create(dados)
    .then(data =>{
        return callback(data);
    })
    .catch(err =>{
        return callback(err);
    });
    }

    putDados(dados, id, callback){
    models.user
    .findByPk(id)
    .then(data =>{
        data.update(dados)
        return callback(data);
    })
    .catch(err =>{
        return callback(err);
    });
    }
    
    delete(id, callback){
        models.user
        .findByPk(id)
        .then(data =>{
            data.destroy();
            return callback(data);
        })
        .catch(err =>{
            return callback(err);
        });
    }
    validaEmail(email, callback){
    models.user
    .findAll({
        where: {email: email}      
    })
    .then(data =>{
        return callback(data);
    })
    .catch(err =>{
        return callback(err);
    });
    }
}

module.exports = Model

