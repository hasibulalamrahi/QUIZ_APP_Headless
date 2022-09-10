const superAdmins = require("../../models/admin/auth/signup");
const jwt = require("jsonwebtoken");

exports.superAdminSignIn = async (req, res) => {
  // res.json({ message: "Sign-in controller" });
  const { email, password } = req.body;

  const adminWithEmail = await superAdmins
    .findOne({ where: { email } })
    .catch((err) => {
      console.log("Error with Finding Admin For Login", err);
    });
  if (!adminWithEmail) {
    return res.json({ message: "User Does not exists, Please Sign Up First" });
  }

  if (adminWithEmail.password !== password) {
    return res.json({
      message: "Email Or Password is invalid",
    });
  }

  const jwtToken = jwt.sign(
    { id: adminWithEmail.ID, email: adminWithEmail.email },
    process.env.JWT_SECRET
  );
  res.json({ message: "Welcome Back!", token: jwtToken });
};
