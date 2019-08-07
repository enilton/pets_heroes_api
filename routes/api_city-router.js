const Controller = require("../app/controller/api_city-controller");
const controller = new Controller();
const express = require("express");
const api_city = express.Router();

api_city.get('/', controller.getStates);
api_city.get('/:state', controller.getCities);

module.exports = api_city