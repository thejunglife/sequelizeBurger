const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

const Burger = require('./Burger.js')(sequelize, Model, DataTypes)

module.exports = { Burger }