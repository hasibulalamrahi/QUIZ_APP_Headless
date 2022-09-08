const express = require('express')
const router = express.Router()
const subjectController = require('../controllers/subjectControllers')

router.get('/',subjectController.getAllSubjects)

module.exports = router;