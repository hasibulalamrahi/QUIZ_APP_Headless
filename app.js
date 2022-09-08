const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

//Importing Database Config
const db = require('./config/database')

//importing Routes 

const subjectsRouter = require('./routes/subjectRoutes')
const userAdminRoutes = require('./routes/createAdminRoutes')

db.authenticate()
                .then(()=> console.log('Databse Connected Successfully...'))
                .catch((err)=>console.log('Error: ',err))


const app = express();

//json parser
app.use(bodyParser.json());
//Routes
app.use('/api/v1/subjects',subjectsRouter)
app.use('/api/v1/admins',userAdminRoutes)


module.exports = app