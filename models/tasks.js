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