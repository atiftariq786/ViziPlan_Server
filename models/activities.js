let Sequelize = require("sequelize");
let sequelize = require("../config/connection");

//Create a activites model

let Activities = sequelize.define("activities", {
  id: {
    defaultValue: Sequelize.INTEGER,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: Sequelize.STRING,
  action: Sequelize.STRING,
  goalHeading: Sequelize.STRING,
  createdAt: {
    type: Sequelize.DataTypes.DATE,
    defaultValue: Sequelize.literal(`NOW()`),
  },
});

//Sync with DB
Activities.sync();

module.exports = Activities;
