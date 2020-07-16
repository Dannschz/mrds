class Reservacion {
  constructor(rest, horario, nombre, numMesa) {
    this.restaurante = rest;
    this.horario = horario;
    this.numMesa = numMesa;
    this.nombre = nombre;
  }

  registrarReservacion() {
    // almacenar en BD
  }

  enviarReservacion() {
    //Enviarl al cliente
  }

  get() {
    return {
      restaurante: this.restaurante,
      horario: this.horario,
      numMesa: this.numMesa,
      nombre: this.nombre,
    };
  }

  buscarReservacion() {
    //buscar en base de datos
  }

  cancelarReservacion() {
    // eliminar de base de datos
    // y notificar al restaurante
  }
}
