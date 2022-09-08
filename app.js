const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

//Importing Database Config
const db = require('./config/database')

db.authenticate()
                .then(()=> console.log('Databse Connected Successfully...'))
                .catch((err)=>console.log('Error: ',err))


const app = express();

module.exports = app