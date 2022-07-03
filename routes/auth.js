const express = require("express");
let User = require("../models/user");
var bCrypt = require("bcrypt-nodejs");
const passport = require("passport");

var generateHash = function (password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

const router = express.Router();
//==========================================User Signup=====================================================

router.post("/signup", function (req, res) {
  console.log("calling sign up");

  const { email, password, firstname, lastname, username } = req.body;

  if (!email || !password || !firstname || !lastname || !username) {
    return res.status(404).json({
      success: false,
      message: "User info not provided",
    });
  }

  User.findOne({
    where: {
      email,
    },
  }).then(function (user) {
    if (user) {
      return res.status(404).json({
        success: false,
        message: "User already signedup",
      });
    } else {
      var userPassword = generateHash(password);

      var data = {
        email: email,

        password: userPassword,

        firstname,

        lastname,
        username,
        lastLogin: new Date(),
      };

      User.create(data).then(function (newUser, created) {
        console.log(newUser);
        if (!newUser) {
          return res.status(404).json({
            success: false,
            message: "User signed up Failed",
          });
        }

        if (newUser) {
          passport.authenticate("local")(req, res, function () {
            console.log("Auth successfull");
            return res.status(201).json({
              success: true,
              message: newUser.username,
            });
          });
        }
      });
    }
  });
});
//==========================================User Login=====================================================

router.post("/signin", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    } //error exception

    // user will be set to false, if not authenticated
    if (!user) {
      res.status(401).json(info); //info contains the error message
    } else {
      // if user authenticated maintain the session
      req.logIn(user, function () {
        console.log(user);
        // do whatever here on successful login
        console.log(
          `req.session.passport: ${JSON.stringify(req.session.passport)}`
        );
        const { email, lastname, firstname } = user;
        res.status(200).json({ email, lastname, firstname, success: true });
      });
    }
  })(req, res, next);
});

module.exports = router;
