const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Ingredient = require("./ingredient");
const Instruction = require("./instruction");

const Food = sequelize.define("foods", { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    video: {
        type: DataTypes.STRING,
        allowNull: false,
    }

});
Ingredient.belongsTo(Food, {
    constranit: true,
    foreignKey: "idFood",
    allowNull: false,
   
});
Instruction.belongsTo(Food, {
    constranit: true,
    foreignKey: "idFood",
    allowNull: false,
   
});
Food.hasMany(Ingredient, { foreignKey: 'idFood' });
Food.hasMany(Instruction,{ foreignKey: 'idFood' });
module.exports = Food;


