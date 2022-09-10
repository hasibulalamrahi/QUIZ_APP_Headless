const passport = require("passport");
const passportJwt = require("passport-jwt");
const extractJwt = passportJwt.ExtractJwt;
const strategyJwt = passportJwt.Strategy;
const superAdmins = require("../../models/admin/auth/signup");
passport.use(
  new strategyJwt(
    {
      jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, done) {
      return superAdmins
        .findOne({ where: { ID: jwtPayload.id } })
        .then((admin) => {
          return done(null, admin);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);
