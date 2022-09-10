const express = require("express");
const superAdminSignIn = require("../../controllers/admin/signIn");

const router = express.Router();

router.post("/", superAdminSignIn.superAdminSignIn);

module.exports = router;
