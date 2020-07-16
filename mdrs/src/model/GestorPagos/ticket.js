class Ticket {
  constructor() {
    this.fecha = Date.now();
    this.concepto = [];
  }

  registrarTicket() {
    // almacenarlo en base de datos
  }

  get() {
    return {
      fecha: this.fecha,
      concepto: this.concepto,
    };
  }
}
