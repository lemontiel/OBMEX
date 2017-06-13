const mongoose = require ('mongoose');
const autoIncrement = require('@ineentho/mongodb-autoincrement');
const config = require ('../config/database');

//Inventory Schema
const inventorySchema = mongoose.Schema({
  //TODO Inventory Schema

});
inventorySchema.plugin(autoIncrement.mongoosePlugin);

//Functions
