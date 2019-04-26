const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  address: { type: String, required: false },
  county: { type:String},
  building_type: String,
  finished_size: Number,
  year_built: Number,
  //date: { type: Date, default: Date.now }
});
const House = mongoose.model("House", bookSchema);

module.exports = House;
