// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require('sequelize')
var config = require('./config.json')

const env = process.env.NODE_ENV
let configToUse = config.development

if (env === 'production') {
  configToUse = config.production
}

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize(
  configToUse.database,
  configToUse.username,
  configToUse.password,
  {
    host: configToUse.host,
    port: 3306,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
)

// Exports the connection for other files to use
module.exports = sequelize
