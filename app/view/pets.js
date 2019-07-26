const app = require("../app");
const router = require("../../routes/pet-router");

app.use('/pets',router);