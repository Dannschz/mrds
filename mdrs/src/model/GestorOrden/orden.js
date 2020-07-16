const mongoose = require("mongoose");
//mongoose.set("useCreateIndex", true);

const OrdenSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  sustentos: { type: [{name: String}], required: true },
  state: { type: String, required: true },
});

const Orden = mongoose.model("Orden", OrdenSchema);
module.exports = Orden;

class Orden {
  constructor() {
    this.amount = 0;
    this.sustentos = [];
    this.state = "";
  }

  pagarOrden() {
    // importar clase pago
  }

  registrarOrden() {
    // guardar en base de datos
  }

  
}