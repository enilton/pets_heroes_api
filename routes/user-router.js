const Controller = require("../app/controller/user-controller");
const controller = new Controller();
const express = require("express");
const user = express.Router();
const multer = require('multer');
const uuid = require('uuid/v1');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/uploads/users");
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+file.originalname);
    }
});
const upload = multer({ storage : storage });

user.get('/', controller.get);
user.get('/:id', controller.getone);
user.post('/', upload.single('imagem'), controller.post);
user.put('/:id', upload.single('imagem'), controller.put);
user.post('/login', controller.login )
user.delete('/:id', controller.delete);

module.exports = user