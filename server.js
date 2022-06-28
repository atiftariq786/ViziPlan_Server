// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
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
