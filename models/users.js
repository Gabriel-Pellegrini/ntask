module.exports = (sequelize,DataType) => {
    const Users = sequelize.define("Users",{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        }
    },{
        classMethods: {
            associate: (models) => {
                Users.hasMany(models.Tasks);
            }
        }
    });

        // After Version 4 of sequelize isn't more accept associating as a object into .define parameter

        // Users.associate = (models) => {
        //     Users.hasMany(models.Tasks)
        // };

    return Users;
};