const Model = require("../model/message-model");
const model = new Model();


class MessageController{
    get(req, res){
        model.getAll((result)=>{
            if(result.length == 0){
                res.send("Não há resultados para esta consulta")
            }
            else{
                //console.log(result);
                res.send(result);
            }
        })
    }
    
    getone(req, res){
        const id = req.params.id;

        model.getOne(id,(result)=>{
            if(result.length == 0){
                res.send("Não há resultados para esta consulta")
            }
            else{
                res.send(result);
            }
        })
    }
    post(req, res){
        const mensagem = {
           id_pet : req.body.id_pet,
           id_doador: req.body.id_doador,
           id_adotante: req.body.id_adotante,
           mensagem: req.body.mensagem
        }
        model.setDados(mensagem,(result)=>{
            if(result){
                res.send(mensagem);
            }
            else{
                throw Error;
            }
            
        });
    }
    
    put(req, res){
        const mensagem = {
            id_pet : req.body.id_pet,
            id_doador: req.body.id_doador,
            id_adotante: req.body.id_adotante,
            mensagem: req.body.mensagem
         }
        const id = req.params.id;
        model.putDados(mensagem, id, (result)=>{
            if(result){
                res.send(mensagem);
            }
            else{
                throw Error;
            }
        });
    }
    
    
    delete(req, res){
        const id = req.params.id;
        model.delete(id, (result)=>{
            if(result){
                res.send(result);
            }
            else{
                throw Error;
            }
        });
    }
    
}
module.exports = MessageController
