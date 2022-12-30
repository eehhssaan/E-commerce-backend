require("dotenv").config();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { signInToken, tokenForVerify, sendEmail } = require("../config/auth");

// verifyEmailAddress
const verifyEmailAddress = async (req, res) => {
  const isAdded = await User.findOne({ email: req.body.email });
  if (isAdded) {
    return res.status(400).json({
      message: "This Email already Added!",
    });
  } else {
    const token = tokenForVerify(req.body);
    const body = {
      from: process.env.EMAIL_USER,
      to: `${req.body.email}`,
      subject: "Email Activation",
      subject: "Verify Your Email",
      html: `<h2>Hello ${req.body.email}</h2>
      <p>Verify your email address to complete the signup and login into your <strong>KachaBazar</strong> account.</p>

        <p>This link will expire in <strong> 15 minute</strong>.</p>

        <p style="margin-bottom:20px;">Click this link for active your account</p>

        <a href=${process.env.STORE_URL}/user/email-verification/${token} style="background:#22c55e;color:white;border:1px solid #22c55e; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Verify Account</a>

        <p style="margin-top: 35px;">If you did not initiate this request, please contact us immediately at support@kachabazar.com</p>

        <p style="margin-bottom:0px;">Thank you</p>
        <strong>Kachabazar Team</strong>
             `,
    };
    const message = "Please check your email to verify!";

    sendEmail(body, res, message);
  }
};

// Add new User
const registerUser = async (req, res) => {
  const token = req.params.token;
  const { name, email, password } = jwt.decode(token);
  const isAdded = await User.findOne({ email: email });

  if (isAdded) {
    const token = signInToken(isAdded);
    return res.send({
      token,
      name: isAdded.name,
      email: isAdded.email,
      message: "Email Already Verified!",
    });
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_FOR_VERIFY, (err, token) => {
      if (err) {
        return res
          .status(401)
          .send({ message: "Token Expired, Please try again!" });
      } else {
        const newUser = new User({
          name,
          email,
          password: bcrypt.hashSync(password),
        });
        newUser.save();
        const token = signInToken(newUser);
        res.send({
          token,
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          message: "Email Verified, Please Login Now!",
        });
      }
    });
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.registerEmail });

    if (
      user &&
      user.password &&
      bcrypt.compareSync(req.body.password, user.password)
    ) {
      const token = signInToken(user);
      res.send({
        token,
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        image: user.image,
      });
    } else {
      res.status(401).send({
        message: "Invalid Email or Password",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = { registerUser, loginUser };
