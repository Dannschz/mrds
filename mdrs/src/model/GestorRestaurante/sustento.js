const mongoose = require("mongoose");

const SustentoSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
//   category: { type: String, enum: ["platillo", "bebida", "postre"] },
});

module.exports = SustentoSchema;
