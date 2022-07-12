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

  const { email, password, firstname, lastname } = req.body;

  if (!email || !password || !firstname || !lastname) {
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
              message: newUser.email,
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
      res.status(401).json({
        success: false,
        message: "Couldn't find your email or password incorrect",
      }); //info contains the error message
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
//==========================================User Logout=====================================================
router.get("/logout", function (req, res) {
  console.log("trying to logout....");
  req.session.destroy();
  req.logout(function () {
    console.log("Logging out now");
    res.status(200).json({ success: true, message: "User logout" });
  });
});
//==========================================
router.post("/isLoggedIn", function (req, res) {
  if (req.isAuthenticated()) {
    res.send({ state: "success", user: req.user });
  } else {
    res.send({ state: "failure", user: null });
  }
});

module.exports = router;
