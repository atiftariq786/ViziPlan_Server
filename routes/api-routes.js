let images = require("../models/visionBoardImages");

module.exports = function (app) {
  // Get all chirps
  app.get("/api/visionBoardImages", function (req, res) {
    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    //   Chirp.findAll({}).then(function(results) {
    //     // results are available to us inside the .then
    //     res.json(results);
    //   });
  });
};
