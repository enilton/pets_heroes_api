const Model = require("../model/pet-model");
const model = new Model();


class PetController{
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
        const id = req.params.id_pet;
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
        const img = req.files;
        //console.log(req.files);
        model.setDados(pet,(result)=>{
            if(result){
                for(let i; i<= img.length; i++){
                    let imagem = img[i].filename;
                    model.setImagens(imagem,(result)=>{
                        if(!result){
                            throw Error; 
                        }
                    });
                }
                res.send(pet);
            }
            else{
                throw Error;
            }
            
        });
    }
    
    put(req, res){
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
        const id_pet = req.params.id_pet;
        model.putDados(pet, id_pet, (result)=>{
            if(result){
                res.send(pet);
            }
            else{
                throw Error;
            }
        });
    }
    
    
    delete(req, res){
        const id = req.params.id_pet;
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
module.exports = PetController
