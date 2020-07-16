class Tarjeta {
  constructor(numero, fechaExp, cvv, titular) {
    this.numero = numero;
    this.fechaExp = fechaExp;
    this.cvv = cvv;
    this.titular = titular;
  }

  getTarjeta() {
    return {
      numero: this.numero,
      fechaExp: this.fechaExp,
      cvv: this.cvv,
      titular: this.titular,
    };
  }
}
