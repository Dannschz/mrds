const User = require("../GestotIE/user");
const Restaurante = require("../GestorRestaurante/restaurante");

class Registro {
  constructor(user) {
    this.user = user;
  }

  static async registrarUsuario(user) {
    const userSchema = new User(user);
    const newUser = await userSchema.save();
    return newUser;
  }

  static async registrarRestaurante(rest) {
    const resSchema = new Restaurante(rest);
    const newRest = await resSchema.save();
    return newRest;
  }
}

module.exports = Registro;
