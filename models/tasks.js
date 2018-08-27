
//This module exports a callback to route request
module.exports = app =>{
    return {
        findAll : (params, callback) => {
            return callback([
                {title:"Fazer compras"},
                {title:"Investir sobra do mês"},
            ]);
        }
    };
};