const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Ingredient = sequelize.define("ingredient", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name_ingredient: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Ingredient;
