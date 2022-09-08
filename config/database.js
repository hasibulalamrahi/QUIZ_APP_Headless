const Sequelize = require('sequelize')
module.exports = new Sequelize('Quiz_App', 'postgres', 'bs23', {
  host: 'localhost',
  dialect:  'postgres'  ,
  operatorsAliases: false,

  pool:{
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
})

// modules.exports = db