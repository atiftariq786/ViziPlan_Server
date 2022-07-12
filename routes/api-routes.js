const express = require("express");
let Images = require("../models/visionBoardImages");
let SelectedImages = require("../models/visionBoardSelectedImages");
let AddGoal = require("../models/addGoal.js");

const router = express.Router();
// ====================================VisionBoard Images and Quotes List Routes========================================
router.get("/images/:type", function (req, res) {
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

router.post("/images/add", function (req, res) {
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

router.delete("/image/:id", function (req, res) {
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
router.post("/visionBoard/save", function (req, res) {
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

router.get("/visionBoard/me", function (req, res) {
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

router.delete("/visionBoard/:id", function (req, res) {
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

router.post("/goals/addGoal", function (req, res) {
  console.log("Goal Data:");
  console.log(req.body);
  AddGoal.create({
    id: req.body.id,
    heading: req.body.heading,
    url: req.body.url,
    category: req.body.category,
    description: req.body.description,
    isPrivate: req.body.isPrivate,
  }).then(function (results) {
    res.json(results);
    console.log(results, "AddGoal Output");
  });
});
module.exports = router;
