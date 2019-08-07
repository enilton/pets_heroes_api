const Controller = require("../app/controller/message-controller");
const controller = new Controller();
const express = require("express");
const message = express.Router();

message.get('/', controller.get);
message.get('/:id', controller.getone);
message.post('/', controller.post);
message.put('/:id', controller.put);
message.delete('/:id', controller.delete);

module.exports = message