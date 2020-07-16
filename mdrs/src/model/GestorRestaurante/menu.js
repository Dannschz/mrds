const mongoose = require("mongoose");
//mongoose.set("useCreateIndex", true);
const Sustento = require("./sustento");

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  products: { type: [Sustento], default: [] },
});

module.exports = MenuSchema;
