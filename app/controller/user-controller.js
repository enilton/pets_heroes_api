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
                res.status(200).send(result);
            }
        })
    }
    
    getone(req, res){
        const id = parseInt(req.params.id);
        model.getOne(id,(result)=>{
            if(result.length == 0){
                res.send("Não há resultados para esta consulta")
            }
            else{
                //console.log(result);
                res.status(200).send(result);
            }
        })
    }
    post(req, res){
        const usuario = {
           firstName: req.body.firstname,
           lastName: req.body.lastname,
           email: req.body.email,
           password: req.body.password,
           phone: req.body.phone, 
           img: req.file.filename,
           type: req.body.type
        }
        model.setDados(usuario,(result)=>{
            if(result){
                res.status(200).send(usuario);
            }
            else{
                throw Error;
            }
        });
    }
    put(req, res){
        const id = parseInt(req.params.id);
        const usuario = {
           firstName: req.body.firstname,
           lastName: req.body.lastname,
           email: req.body.email,
           password: req.body.password,
           phone: req.body.phone, 
           img: req.file.filename,
           type: req.body.type
         }
        
        model.putDados(usuario, id, (result)=>{
            if(result){
                res.status(200).send(usuario);
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
    login(req,res){
            const email = req.body.email;
            const senha = req.body.password;
        model.validaEmail(email, (result)=>{
            if(result == 0){
                res.status(404).send({ error: 'email não cadastrado' });
            }
            else{
                if(result[0].password != senha){
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
