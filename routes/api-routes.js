const express = require("express");
let Images = require("../models/visionBoardImages");
let SelectedImages = require("../models/visionBoardSelectedImages");
let Goals = require("../models/goals.js");
let Activities = require("../models/activities.js");
var Sequelize = require("sequelize");

const router = express.Router();
// ====================================VisionBoard Images and Quotes List Routes========================================
router.get("/images/:type", function (req, res) {
  console.log("getting call");
  Images.findAll({
    where: {
      type: req.params.type,
      [Sequelize.Op.or]: [
        {
          createdBy: 0,
        },
        { createdBy: req.user.id },
      ],
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
    createdBy: req.user.id,
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
      createdBy: req.user.id,
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
    userId: req.user.id,
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
      userId: req.user.id,
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
      userId: req.user.id,
    },
  }).then(function () {
    res.end();
  });
});
// ====================================Goals Routes===========================================
router.post("/goals/addGoal", function (req, res) {
  console.log("Goal Data:");
  console.log(req.body);
  console.log(req.user.id, "User ID backend");
  Goals.create({
    id: req.body.id,
    userId: req.user.id,
    heading: req.body.heading,
    url: req.body.url,
    category: req.body.category,
    description: req.body.description,
    isPrivate: req.body.isPrivate,
    //.then
  }).then(function (results) {
    if (req.body.isPrivate === false) {
      return Activities.create({
        id: req.body.id,
        firstname: req.user.firstname,
        action: "created",
        goalHeading: req.body.heading,
        createdAt: Date(),
      }).then(function (results) {
        res.json(results);
      });
    } else {
      res.json(results);
      console.log(results, "AddGoal Output");
    }
  });
});

router.get("/goals/:type", function (req, res) {
  if (req.params.type === "completed") {
    Goals.findAll({
      where: { completedAt: { [Sequelize.Op.not]: null }, userId: req.user.id },
    }).then(function (result) {
      console.log(result);
      res.json(result);
    });
  }
  if (req.params.type === "incomplete") {
    Goals.findAll({ where: { completedAt: null, userId: req.user.id } }).then(
      function (result) {
        console.log(result);
        res.json(result);
      }
    );
  }
  if (req.params.type === "allGoals") {
    Goals.findAll({
      where: { userId: req.user.id },
    }).then(function (result) {
      console.log(result);
      res.json(result);
    });
  }
});

router.get("/activities", function (req, res) {
  console.log("getting call");
  Activities.findAll({
    order: [["createdAt", "DESC"]],
    limit: 100,
  }).then(function (results) {
    // results are available to us inside the .then
    res.json(results);
  });
});

router.delete("/goals/:id", function (req, res) {
  console.log("Selected goals ID:");
  console.log(req.params.id);
  Goals.destroy({
    where: {
      id: req.params.id,
      userId: req.user.id,
    },
  }).then(function () {
    res.end();
  });
});

router.put("/goals/updateGoal/:id", function (req, res) {
  console.log("Goal Data:");
  console.log(req.body);

  Goals.update(
    {
      heading: req.body.heading,
      url: req.body.url,
      category: req.body.category,
      description: req.body.description,
      isPrivate: req.body.isPrivate,
    },
    { where: { id: req.params.id, userId: req.user.id } }
  )
    .then(function (goalUpdated) {
      res.json(goalUpdated);
    })
    .catch((err) => console.log(err));
});
//====================================================================
router.put("/goals/completeGoal/:id", function (req, res) {
  console.log("Goal Data:");
  console.log(req.params.id, "Backend: Id coming from client side");
  //Sequelize.NOW
  Goals.update(
    {
      completedAt: Date(),
    },
    { where: { id: req.params.id, userId: req.user.id } }
  )
    .then(function (results) {
      if (req.body.isPrivate === false) {
        return Activities.create({
          id: req.body.id,
          firstname: req.user.firstname,
          action: "completed",
          goalHeading: req.body.heading,
          createdAt: Date(),
        }).then(function (results) {
          res.json(results);
        });
      } else {
        res.json(results);
        console.log(results, "Completed goal result");
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
