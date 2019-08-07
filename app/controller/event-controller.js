const Model = require("../model/event-model");
const model = new Model();


class EventController{
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
        const event = {
           id_usuario: req.body.id_usuario,
           id_endereco: req.body.id_endereco,
           titulo: req.body.titulo,
           descricao: req.body.descricao,
           imagem: req.file.filename
        }
        model.setDados(event,(result)=>{
            if(result){
                res.send(event);
            }
            else{
                throw Error;
            }
            
        });
    }
    
    put(req, res){
        const event = {
           id_usuario: req.body.id_usuario,
           id_endereco: req.body.id_endereco,
           titulo: req.body.titulo,
           descricao: req.body.descricao,
           imagem: req.file.filename
         }
        const id = req.params.id;
        model.putDados(event, id, (result)=>{
            if(result){
                res.send(event);
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
module.exports = EventController
