const Controller = require("../app/controller/end-controller");
const controller = new Controller();
const express = require("express");
const endereco = express.Router();

endereco.get('/', controller.get);
endereco.get('/:id', controller.getone);
endereco.post('/', controller.post);
endereco.put('/:id', controller.put);
endereco.delete('/:id', controller.delete);

module.exports = endereco