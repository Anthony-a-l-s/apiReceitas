const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Instruction = sequelize.define("instruction",{
    
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Instruction;


