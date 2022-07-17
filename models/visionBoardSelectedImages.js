// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection");

// Creates a "Chirp" model that matches up with DB
let VisionBoardSelectedImages = sequelize.define("selectedImages", {
  id: {
    defaultValue: Sequelize.INTEGER,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  imageId: Sequelize.INTEGER,
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  url: Sequelize.STRING,

  createdAt: {
    type: Sequelize.DataTypes.DATE,
    defaultValue: Sequelize.literal(`NOW()`),
  },
  updatedAt: {
    type: Sequelize.DataTypes.DATE,
    defaultValue: Sequelize.literal(`NOW()`),
  },
});

// Syncs with DB
VisionBoardSelectedImages.sync();

module.exports = VisionBoardSelectedImages;
