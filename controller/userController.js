const User = require("../model/userModel");

const register = async (req, res) => {
  //Destructuring the data
  const { firstName, lastName, email, password } = req.body;
  try {
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists...",
      });
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  //Destructuring the data
  const { email, password } = req.body;
};

module.exports = {
  register,
  login,
};

//200 success
//201 new resource created
//400 validation error
//401 unauthorized
//500 server error
