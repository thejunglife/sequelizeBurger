module.exports = (sequelize, Model, DataTypes) => {
  class Burger extends Model { }

  Burger.init({
    name: DataTypes.STRING,
    eaten: {type: DataTypes.BOOLEAN, defaultValue: false }
  }, { sequelize, modelName: 'burger'})

  return Burger
}