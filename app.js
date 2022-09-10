const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();
//Importing Database Config
require("./config/database");

//importing middleware
require("./controllers/auth/passport");
//importing middlewares
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/error");

//importing passport auth guard

const passport = require("passport");

//importing Routes
const subjectsRouter = require("./routes/subjectRoutes");
const userAdminRoutes = require("./routes/createAdminRoutes");
const adminSignUp = require("./routes/admin/signUp");
const adminSignIn = require("./routes/admin/signIn");

const app = express();
app.use(express.json());

//declaring cors
app.use(cors());

//json parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//morgan and helmet packages
app.use(morgan("dev"));
app.use(helmet());

//Routes
app.use(
  "/api/v1/subjects",
  passport.authenticate("jwt", { session: false }),
  subjectsRouter
);
app.use("/api/v1/admins", userAdminRoutes);
app.use("/api/v1/admin-signup", adminSignUp);
app.use("/api/v1/admin-signIn", adminSignIn);

//declaring all the middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;
