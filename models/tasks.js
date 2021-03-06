
//This module exports a callback to route request
// module.exports = app =>{
//     return {
//         findAll : (params, callback) => {
//             return callback([
//                 {title:"Fazer compras"},
//                 {title:"Investir sobra do mês"},
//             ]);
//         }
//     };
// };

module.exports = (sequelize,DataType) => {
    const Tasks = sequelize.define("Tasks",{
        id: {
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty:true
            }
        },
        done: {
            type:DataType.BOOLEAN,
            allowNull: false,
            defaultValue:false
        }
    },{
        classMethods: {
            associate: models => {
                Tasks.belongsTo(models.Users);
            }
        }
    });

    // After Version 4 of sequelize isn't more accept associating as a object into .define parameter
    // Tasks.associate = (models) => {
    //   Tasks.belongsTo(models.Users)
    // };
    
    return Tasks;
};