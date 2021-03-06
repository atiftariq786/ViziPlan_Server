var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var User = sequelize.define("user", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },

  firstname: {
    type: Sequelize.STRING,
    notEmpty: true,
  },

  lastname: {
    type: Sequelize.STRING,
    notEmpty: true,
  },

  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  last_login: {
    type: Sequelize.DATE,
  },

  status: {
    type: Sequelize.ENUM("active", "inactive"),
    defaultValue: "active",
  },
});

// Syncs with DB
User.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = User;
