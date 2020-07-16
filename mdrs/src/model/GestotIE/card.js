const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  number: { type: String },
  cvv: { type: Number },
  expDate: { type: Date },
});

module.exports = CardSchema;
