const app = require("../app");
const router = require("../../routes/api_city-router");

app.use('/api/consulta/cidades/', router);