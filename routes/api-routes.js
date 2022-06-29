let Images = require("../models/visionBoardImages");

module.exports = function (app) {
  // Get all Images
  app.get("/api/images/:type", function (req, res) {
    console.log("getting call");
    Images.findAll({
      where: {
        type: req.params.type,
      },
    }).then(function (results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  app.post("/api/images/add", function (req, res) {
    console.log("Image Data:");
    console.log(req.body);
    Images.create({
      id: req.body.id,
      url: req.body.url,
      type: req.body.type,
      createdBy: req.body.createdBy,
    }).then(function (results) {
      res.json(results);
      console.log(results, "Output");
    });
  });

  app.delete("/api/image/:id", function (req, res) {
    console.log("Image ID:");
    console.log(req.params.id);
    Images.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function () {
      res.end();
    });
  });
};
