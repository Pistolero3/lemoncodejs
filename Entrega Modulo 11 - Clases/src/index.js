console.log("Entrega Modulo 11");

const reservas = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

class Reservas {
  constructor() {
    this._reservas = [];
    this._subtotal = 0;
    this._total = 0;
  }

  calcularSubtotal = () => {
    this._reservas.reduce(
      (acc, { noches }) => (this._subtotal = acc + noches * 100),
      0
    );
    this._subtotal =
      this._subtotal + this.calculatePoeple() + this.calculateBreakfast();
    return this._subtotal;
  };

  calcularTotal = () => {
    const iva = this._subtotal * 0.21;
    this._total = this._subtotal + iva;
  };

  calculateBreakfast = () => {
    let breakfast = 0;
    this._reservas.map(({ desayuno, pax, noches }) =>
      desayuno === true ? (breakfast += 15 * pax * noches) : breakfast
    );
    return breakfast;
  };

  calculatePoeple = () => {
    let peoplePayment = 0;
    this._reservas.map(
      ({ pax, noches }) => (peoplePayment += (pax - 1) * noches)
    );
    return peoplePayment * 40;
  };

  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total;
  }

  set reservas(reservas) {
    this._reservas = reservas;
    this.calcularSubtotal();
    this.calcularTotal();
  }
}

class reservaParticular extends Reservas {
  constructor() {
    super();
  }

  calcularSubtotal = () => {
    this._reservas.reduce(
      (acc, { noches, tipoHabitacion }) =>
        (this._subtotal = acc + noches * this.roomType(tipoHabitacion)),
      0
    );
    this._subtotal =
      this._subtotal + this.calculatePoeple() + this.calculateBreakfast();
    return this._subtotal;
  };

  roomType = (tipoHabitacion) => {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
    }
  };

  get subtotal() {
    return `El subtotal de su reserva PARTICULAR es ${this._subtotal} euros`;
  }

  get total() {
    return `El total de su reserva PARTICULAR es ${this._total} euros`;
  }
}

class reservaTourOperador extends Reservas {
  constructor() {
    super();
  }

  calcularTotal = () => {
    const iva = this._subtotal * 0.21;
    this._total = this._subtotal + iva;
    this._total = Number(this._total - this._total * 0.15).toFixed(2);
  };

  get subtotal() {
    return `El subtotal de su reserva TOUROPERADOR es ${this._subtotal} euros`;
  }

  get total() {
    return `El total de su reserva TOUROPERADOR es ${this._total} euros`;
  }
}

const Particular = new reservaParticular();
Particular.reservas = reservas;
console.log(Particular.subtotal);
console.log(Particular.total);

console.log("*******************************");

const tourOperador = new reservaTourOperador();
tourOperador.reservas = reservas;
console.log(tourOperador.subtotal);
console.log(tourOperador.total);
