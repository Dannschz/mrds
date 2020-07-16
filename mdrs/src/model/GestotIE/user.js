const mongoose = require("mongoose");
const CardSchema = require("./card");
//mongoose.set("useCreateIndex", true);

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, default: 0 , unique: false },
  cards: [CardSchema],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
