const superAdmins = require("../../models/admin/auth/signup");

exports.addSuperAdmins = async (req, res) => {
  // console.log(req.body);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    role,
    password,
    addedBy,
  } = req.body;
  //check if the admin already exists or not
  const alreadyExistsAdmin = await superAdmins
    .findOne({ where: { email } })
    .catch((err) => {
      console.log("Error Occured in Finding Existing Admins", err);
    });
  if (alreadyExistsAdmin) {
    return res.json({ message: "Admin Already Exists" });
  }
  const newSuperAdmins = new superAdmins({
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    role,
    password,
    addedBy,
  });
  const savedSuperAdmin = await newSuperAdmins.save().catch((err) => {
    console.log("error in adding superadmins", err);
    res.json({ message: "Some Problem Occured while adding User" });
  });
  if (savedSuperAdmin) {
    res.json({ message: "Thanks for admin signup" });
  }
};
