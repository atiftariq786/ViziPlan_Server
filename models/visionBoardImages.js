// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection");

// Creates a "Chirp" model that matches up with DB
var VisionBoardImages = sequelize.define("images", {
  id: {
    defaultValue: Sequelize.INTEGER,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  url: Sequelize.STRING,
  type: Sequelize.STRING,
  createdBy: Sequelize.INTEGER,
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
VisionBoardImages.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = VisionBoardImages;
