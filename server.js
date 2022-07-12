// ============================Dependencies=================================
const express = require("express");
const uuid = require("uuid");
const session = require("express-session");

const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api-routes");
const middlewareAuth = require("./routes/utils");
const cookieParser = require("cookie-parser");

// ==========================Sets up the Express App============================
var app = express();

var PORT = process.env.PORT || 3001;

app.use(
  cors({
    //origin: "https://atiftariq786.github.io",
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    genid: (req) => {
      console.log("Inside the session middleware");
      console.log(req.sessionID);
      return uuid.v4(); // use UUIDs for session IDs
    },
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: {
      path: "/",
      expires: 2592000000,
      httpOnly: false,
      encode: String,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport.js")(passport);
//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

// ============================Routes================================
// require("./routes/api-routes")(app);
// require("./routes/auth")(app, passport);
//middlewareAuth.isLoggedIn,
app.use("/api", middlewareAuth.isLoggedIn, apiRoutes);
app.use("/auth", authRoutes);

// =================Starts the server to begin listening==============
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
