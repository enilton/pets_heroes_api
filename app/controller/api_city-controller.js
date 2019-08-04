const cities = require("../resources/api-city/api_city-list.json");


class APICityController{
    getStates(req, res){
        const states = cities.estados.map(el => {
            let state = {};
            state.sigla = el["sigla"];
            state.nome = el["nome"];
            return state;
        });

        res.send(states);
    }
    
    getCities(req, res){
        const state = req.params.state.toUpperCase();
        const fetched_state = cities.estados.filter(el => {
            return el["sigla"] == state
        });
        
        const fetched_cities = fetched_state[0]["cidades"];

        res.send(fetched_cities);
    }
    
}
module.exports = APICityController
