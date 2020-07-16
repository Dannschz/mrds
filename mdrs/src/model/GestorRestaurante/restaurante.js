const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Menu = require("./menu");

const RestauranteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  menus: { type: [Menu], default: [{ name: "Menú Principal", products: [] }] },
});

const Restaurante = mongoose.model("Restaurante", RestauranteSchema);
module.exports = Restaurante;
