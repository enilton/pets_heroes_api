const Model = require("../model/pet-model");
const model = new Model();


class PetController{
    get(req, res){
        model.getAll((result)=>{
            if(result == 0){
                res.send("Não há resultados para esta consulta")
            }
            else{
                //console.log(result);
                res.status(200).send(result);
            }
        })
    }
    
    getone(req, res){
        const id = parseInt(req.params.id);
        model.getOne(id,(result)=>{
            if(result == 0){
                res.send("Não há resultados para esta consulta")
            }
            else{
                res.status(200).send(result);
            }
        })
    }
    getimages(req,res){
        const id = parseInt(req.params.id);
        model.getImages(id, (result)=>{
            if(result.length == 0){
                res.send("Não há resultados para esta consulta")
            }
            else{
                res.status(200).send(result);
            }
        });
    }
    post(req, res){
        const pet = {
            id_usuario: req.body.usuario,
            id_endereco: req.body.endereco,
            nome_pet: req.body.nome,
            idade_pet: req.body.idade,
            especie: req.body.especie,
            porte: req.body.porte,
            descricao: req.body.descricao,
            status: req.body.status,
        }
        const fotos = req.files;
        model.setDados(pet,(result)=>{
            if(result){
                const id = result;
                for(let foto of fotos){
                    let dados = {
                        id_pet : id,
                        img_pet : foto.filename
                    }
                    model.setImagens(dados,(result)=>{
                        if(!result){
                            throw Error; 
                        }
                    });
                }
                res.status(200).send(pet);
            }
            else{
                throw Error;
            }
            
        });
    }
    
    put(req, res){
        const id = parseInt(req.params.id);
        const pet = {
            id_usuario: req.body.usuario,
            id_endereco: req.body.endereco,
            nome_pet: req.body.nome,
            idade_pet: req.body.idade,
            especie: req.body.especie,
            porte: req.body.porte,
            descricao: req.body.descricao,
            status: req.body.status,
        }
        model.putDados(pet, id, (result)=>{
            if(result){
                res.status(200).send(pet);
            }
            else{
                throw Error;
            }
        });
    }
    
    
    delete(req, res){
        const id = parseInt(req.params.id);
        model.delete(id, (result)=>{
            if(result){
                res.status(200).send(result);
            }
            else{
                throw Error;
            }
        });
    }
    
}
module.exports = PetController
