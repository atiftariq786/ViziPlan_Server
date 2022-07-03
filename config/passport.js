//load bcrypt
var bCrypt = require("bcrypt-nodejs");
let User = require("../models/user");

module.exports = function (passport) {
  var LocalStrategy = require("passport-local").Strategy;

  passport.use(
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email

        usernameField: "email",

        passwordField: "password",

        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },

      function (req, email, password, done) {
        console.log("authing user", req.body, email, password, done);

        console.log(
          `req.session.passport: ${JSON.stringify(req.session.passport)}`
        );

        var isValidPassword = function (userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({
          where: {
            email: email,
          },
        })
          .then(function (user) {
            console.log(user?.email, "found!");
            if (!user) {
              return done(null, false, {
                message: "Email does not exist",
              });
            }

            if (!isValidPassword(user.password, password)) {
              console.log(user?.email, "isValidPassword");
              return done(null, false, {
                message: "Incorrect password.",
              });
            }

            var userinfo = user.get();
            return done(null, userinfo);
          })
          .catch(function (err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Something went wrong with your Signin",
            });
          });
      }
    )
  );

  //serialize
  passport.serializeUser(function (user, done) {
    console.log("serializeUser");
    done(null, user.id);
  });

  // deserialize user
  passport.deserializeUser(function (id, done) {
    console.log("deserializeUser");
    User.findOne({ where: { id } }).then(function (user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
};
