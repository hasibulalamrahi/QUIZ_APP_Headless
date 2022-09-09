const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("Quiz_App", "postgres", "bs23", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
});
sequelize
  .authenticate()
  .then(() => console.log("Databse Connected Successfully..."))
  .catch((err) => console.log("Error: ", err));
module.exports = sequelize;
