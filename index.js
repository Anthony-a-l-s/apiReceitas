require("dotenv").config();
const sequelize = require('./src/database/sequelize')
const Food = require("./src/database/models/food")
const Ingredient = require("./src/database/models/ingredient")
const Instruction = require("./src/database/models/instruction")

const app = require('./src/app');
const port = process.env.PORT || 4000;

app.listen(port, async () => {

  await sequelize.sync()
  console.log('Aplicação executando na porta ', port);
});
