const User = require("../models/UserSchema");
const jwt = require("jsonwebtoken");

// Controller function for user registration
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email already exists in the database
    const existingEmail = await User.findOne({ email });

    if (!existingEmail) {
      // Create a new user and save it to the database
      const user = new User({
        username,
        email,
        password,
      });
      await user.save();
      res.status(200).json({ message: "User registered successfully" });
    } else {
      res.status(200).json({ message: "Email already exists" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).json({ error: "No User Exists" });
    }

    const passwordMatch = password === user.password ? true : false;

    if (!passwordMatch) {
      return res.status(200).json({ error: "Invalid username or password" });
    }

    const tokenPayload = {
      email: user.email,
    };

    const accessToken = jwt.sign(tokenPayload, "SECRET");

    res.json({
      status: "success",
      message: "User Logged In!",
      data: {
        accessToken,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
};

module.exports = { loginUser, registerUser};
