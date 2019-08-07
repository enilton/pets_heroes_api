const Controller = require("../app/controller/event-controller");
const controller = new Controller();
const express = require("express");
const event = express.Router();
const multer = require('multer');
const uuid = require('uuid/v1');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/uploads/events");
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+file.originalname);
    }
});
const upload = multer({ storage : storage });

event.get('/', controller.get);
event.get('/:id', controller.getone);
event.post('/', upload.single('imagem'), controller.post);
event.put('/:id', upload.single('imagem'), controller.put);
event.delete('/:id', controller.delete);

module.exports = event