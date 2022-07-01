let Images = require("../models/visionBoardImages");
let SelectedImages = require("../models/visionBoardSelectedImages");

module.exports = function (app) {
  // ====================================VisionBoard Images and Quotes List Routes========================================
  app.get("/api/images/:type", function (req, res) {
    console.log("getting call");
    Images.findAll({
      where: {
        type: req.params.type,
      },
      order: [["createdAt", "DESC"]],
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
  // ====================================VisionBoard selected images saving through these Routes========================================
  app.post("/api/visionBoard/save", function (req, res) {
    console.log("Image Data:");
    console.log(req.body);
    SelectedImages.create({
      id: req.body.id,
      imageId: req.body.imageId,
      userId: 0,
      url: req.body.url,
    }).then(function (results) {
      res.json(results);
      console.log(results, "Selected Images Output");
    });
  });

  app.get("/api/visionBoard/me", function (req, res) {
    console.log("getting call visionboard");
    SelectedImages.findAll({
      where: {
        userId: 0,
      },
      order: [["createdAt", "DESC"]],
    }).then(function (results) {
      console.log("then");
      const imageIds = results.map((result) => result.imageId);
      console.log({ imageIds });
      return Images.findAll({
        where: {
          id: imageIds,
        },
      }).then(function (results) {
        // results are available to us inside the .then
        res.json(results);
      });
    });
  });

  app.delete("/api/visionBoard/:id", function (req, res) {
    console.log("Visionboard selected Image ID:");
    console.log(req.params.id);
    SelectedImages.destroy({
      where: {
        imageId: req.params.id,
      },
    }).then(function () {
      res.end();
    });
  });
};
