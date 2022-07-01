// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

app.use(
  cors({
    //origin: "https://atiftariq786.github.io",
    origin: "http://localhost:3000",
    // credentials: true,
  })
);

app.use(
  session({
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

// Routes
// ============================================================
require("./routes/api-routes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// const mysql = require("mysql");
// const fs = require("fs");

// const seedQuery = fs.readFileSync("test.sql", { encoding: "utf-8" });

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   port: 3306,
//   password: "password",
//   database: "vp-app",
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log(
//     "MySQL server successfully connected as id:" + connection.threadId
//   );
//   connection.query(seedQuery, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
//   //   connection.query("SELECT * FROM products", function (err, res) {
//   //     if (err) throw err;
//   //     console.log(res);
//   //     connection.end();
//   //   });
// });
