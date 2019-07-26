const Model = require("../model/user-model");
const model = new Model();


class UserController{
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
        const usuario = {
           email: req.body.email,
           senha: req.body.senha,
           nome: req.body.nome,
           telefone: req.body.telefone,
           imagem: req.file.filename,
           status: "P",
           tipo: req.body.tipo,
           fb: req.body.fb,
           instg: req.body.instg,
           wtsp: req.body.wtsp

        }
        console.log(req.file.filename);
        model.setDados(usuario,(result)=>{
            if(result){
                res.send(usuario);
            }
            else{
                throw Error;
            }
            
        });
    }
    
    put(req, res){
        const usuario = {
            email: req.body.email,
            senha: req.body.senha,
            nome: req.body.nome,
            telefone: req.body.telefone,
            imagem: req.file.filename,
            status: "P",
            tipo: req.body.tipo,
            fb: req.body.fb,
            instg: req.body.instg,
            wtsp: req.body.wtsp
         }
        const id = req.params.id;
        model.putDados(usuario, id, (result)=>{
            if(result){
                res.send(usuario);
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
    login(req,res){
            const email = req.body.email;
            const senha = req.body.senha;
        model.validaEmail(email, (result)=>{
            if(result.length == 0){
                res.status(404).send({ error: 'email não cadastrado' });
            }
            else{
                if(result[0].senha != senha){
                    res.status(401).send({ error: 'Senha inválida' });
                }
                else{
                    res.status(200).send("Login Sucess");
                }  
            }
           
            
        })
    }
    
}
module.exports = UserController
