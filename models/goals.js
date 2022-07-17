// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection");

// Creates a "Chirp" model that matches up with DB
var AddGoals = sequelize.define("goals", {
  id: {
    defaultValue: Sequelize.INTEGER,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  heading: Sequelize.STRING,
  url: Sequelize.STRING,
  category: Sequelize.STRING,
  description: Sequelize.STRING,
  isPrivate: Sequelize.BOOLEAN,
  completedAt: {
    type: Sequelize.DataTypes.DATE,
    defaultValue: null,
  },
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
AddGoals.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = AddGoals;
