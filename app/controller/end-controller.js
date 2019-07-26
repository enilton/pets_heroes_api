const Model = require("../model/end-model");
const model = new Model();


class EnderecoController{
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
        const endereco = {
           id_usuario: req.body.id_usuario,
           rua: req.body.rua,
           num: req.body.num,
           bairro: req.body.bairro,
           cidade: req.body.cidade,
           estado: req.body.estado
        }
        console.log(endereco)
        model.setDados(endereco,(result)=>{
            if(result){
                res.send(endereco);
            }
            else{
                throw Error;
            }
            
        });
    }
    
    put(req, res){
        const endereco = {
            id_usuario: req.body.id_usuario,
           rua: req.body.rua,
           num: req.body.num,
           bairro: req.body.bairro,
           cidade: req.body.cidade,
           estado: req.body.estado
         }
        const id = req.params.id;
        model.putDados(endereco, id, (result)=>{
            if(result){
                res.send(endereco);
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
module.exports = EnderecoController
