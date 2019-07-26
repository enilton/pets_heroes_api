const Controller = require("../app/controller/pet-controller");
const controller = new Controller();
const express = require("express");
const pets = express.Router();
const multer = require('multer');
const uuid = require('uuid/v1');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/uploads/pets");
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+file.originalname);
    }
});
const upload = multer({ storage : storage });

pets.get('/', controller.get);
pets.get('/:id', controller.getone);
pets.get('/:id/imagens', controller.getimages);
pets.post('/', upload.array('img_pet', 10), controller.post);
pets.put('/:id', upload.array('img_pet', 10), controller.put);
pets.delete('/:id', controller.delete);

module.exports = pets