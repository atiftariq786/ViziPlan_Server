const express = require("express");
let User = require("../models/user");
var bCrypt = require("bcrypt-nodejs");
const passport = require("passport");
let Goals = require("../models/goals.js");
let Activities = require("../models/activities.js");

var generateHash = function (password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

const router = express.Router();
const description =
  "This is a sample goal. Fill in details of your goals here such as how you will acheive it, what are the things you need, who you will achieve it with, and most importantly why this goal matters to you.";
const isPrivate = true;

const dummyGoals = [
  {
    heading: "Create a list of goals on ViziPlan",
    url: "https://clickup.com/blog/wp-content/uploads/2021/12/goals.png",
    category: "Self-Improvement",
    description,
    isPrivate: false,
  },
  {
    heading: "(Sample Goal) Visit Grand Canyon with Family",
    url: "https://media.cntraveler.com/photos/5c744bbbff54753046216f13/16:9/w_4000,h_2250,c_limit/Grand-Canyon-National-Park_GettyImages-152836923.jpg",
    category: "Family",
    description,
    isPrivate,
  },
  {
    heading: "(Sample Goal) See Golden Gate Bridge",
    url: "https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg",
    category: "Traveling",
    description,
    isPrivate,
  },
  {
    heading: "(Sample Goal) Learn French",
    url: "https://www.clozemaster.com/blog/wp-content/uploads/2017/11/How-Long-Does-it-Take-to-Learn-French.jpg",
    category: "Learning",
    description,
    isPrivate,
  },

  {
    heading: "(Sample Goal) Hike in Yosemite",
    url: "https://media.cntraveler.com/photos/5b71a3d92211d70d9158ae1a/16:9/w_3344,h_1881,c_limit/Yosemite_GettyImages-632167865.jpg",
    category: "Hiking",
    description,
    isPrivate,
  },
  {
    heading: "(Sample Goal) Travel through Greece",
    url: "https://handluggageonly.co.uk/wp-content/uploads/2015/05/Hand-Luggage-Only-7.jpg",
    category: "Traveling",
    description,
    isPrivate,
  },
];

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

      User.create(data).then((newUser, created) => {
        console.log(newUser);
        if (!newUser) {
          return res.status(404).json({
            success: false,
            message: "User signed up Failed",
          });
        }

        if (newUser) {
          passport.authenticate("local")(req, res, async () => {
            for (let i = 0; i < dummyGoals.length; i++) {
              await Goals.create({
                id: null,
                userId: req.user.id,
                ...dummyGoals[i],
              });
            }

            await Activities.create({
              id: null,
              firstname: req.user.firstname,
              action: "started",
              goalHeading: "goal planning on ViziPlan",
              createdAt: Date(),
            });

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
