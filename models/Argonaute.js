const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const argonauteSchema = new Schema({
  name: String
});

const ArgonauteModel = mongoose.model("argonautes", argonauteSchema);

module.exports = ArgonauteModel;