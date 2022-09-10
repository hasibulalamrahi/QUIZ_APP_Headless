const express = require("express");
const signUpAdminsController = require("../../controllers/admin/signUp");

const router = express.Router();

router.post("/", signUpAdminsController.addSuperAdmins);

module.exports = router;
