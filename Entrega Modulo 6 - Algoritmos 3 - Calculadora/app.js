console.log("Entraga modulo 6 - Algoritmos 3");

const notes = document.getElementById("devolucion");
let importeTotal = 0;
let entrega = 0;
let devolucion = 0;
let entry;
// let myChange = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

let myMoneyBox = [
  {
    type: 200,
    quantity: 0,
  },
  {
    type: 100,
    quantity: 0,
  },
  {
    type: 50,
    quantity: 0,
  },
  {
    type: 20,
    quantity: 0,
  },
  {
    type: 10,
    quantity: 0,
  },
  {
    type: 5,
    quantity: 0,
  },
  {
    type: 2,
    quantity: 0,
  },
  {
    type: 1,
    quantity: 0,
  },
  {
    type: 0.5,
    quantity: 0,
  },
  {
    type: 0.2,
    quantity: 0,
  },
  {
    type: 0.1,
    quantity: 0,
  },
  {
    type: 0.05,
    quantity: 0,
  },
  {
    type: 0.02,
    quantity: 0,
  },
  {
    type: 0.01,
    quantity: 0,
  },
];

const getFormData = (e) => {
  let bills;
  e.preventDefault();
  let formData = new FormData(e.target);
  bills = Object.fromEntries(formData);
  createMyMoneyBox(bills, myMoneyBox);
};

const createMyMoneyBox = (bills, myMoneyBox) => {
  for (let [nombre, bill] of Object.entries(bills)) {
    for (let key of myMoneyBox) {
      if (Number(nombre) === key["type"]) {
        key["quantity"] = Number(bill);
      }
    }
  }
  document.getElementById("owe").innerHTML = "Su caja se ha actualizado";
};

const getTotal = () =>
  (importeTotal = Number(document.getElementById("importetotal").value));

const getMoneyGiven = () =>
  (entrega = Number(document.getElementById("entrega").value));

const getDevolucion = (entrega, importeTotal) => {
  if (entrega === 0 || importeTotal === 0) {
    alert("Please, insert both amounts");
  } else {
    devolucion = Number((entrega - importeTotal).toFixed(2));
  }
  return devolucion;
};

const getOptimalChange = (myMoneyBox) => {
  let numberNotes = 0;

  getDevolucion(entrega, importeTotal);

  for (let change of myMoneyBox) {
    let nameNotes = "";
    let nameCoin = "";
    let money;
    numberNotes = Math.floor(devolucion / change.type);
    if (numberNotes > change.quantity) {
      numberNotes = change.quantity;
    }
    entry = document.createElement("h4");
    if (numberNotes >= 1 && change.type >= 5) {
      nameNotes = "billete/s";
      nameCoin = "euros";
      money = change.type;
    } else if (numberNotes >= 1 && change.type < 5 && change.type >= 1) {
      nameNotes = "moneda/s";
      nameCoin = "euros";
      money = change.type;
    } else if (numberNotes >= 1 && change.type < 1) {
      nameNotes = "moneda/s";
      nameCoin = "centimos";
      money = change.type * 100;
    }
    if (nameNotes !== "" && nameCoin !== "") {
      entry.innerHTML = `${numberNotes} ${nameNotes} de ${money} ${nameCoin}`;
      notes.appendChild(entry);
    }
    devolucion = devolucion - numberNotes * change.type;
    devolucion = Number(devolucion).toFixed(2);
    numberNotes = 0;
  }
  document.getElementById("owe").innerHTML = `We owe you ${devolucion} euros`;
  entrega = "";
  importeTotal = "";
};

const getClear = () => {
  while (notes.firstChild) {
    notes.removeChild(notes.lastChild);
  }
  document.getElementById("entrega").value = "";
  document.getElementById("importetotal").value = "";
  document.getElementById("owe").innerHTML = "";
};

document.getElementById("importetotal").addEventListener("change", function () {
  getTotal();
});
document.getElementById("entrega").addEventListener("change", function () {
  getMoneyGiven();
});

document.getElementById("calculate").addEventListener("click", function () {
  getOptimalChange(myMoneyBox);
});

document.getElementById("clear").addEventListener("click", function () {
  getClear();
});

document.getElementById("formulario").addEventListener("submit", function (e) {
  getFormData(e);
});

//Ejercicio previo, sin el challenge

// for (let i = 0; i < myChange.length; i++) {
//   let nameNotes = "";
//   let nameCoin = "";
//   let money;
//   numberNotes = Math.floor(devolucion / myChange[i]);
//   entry = document.createElement("h4");
//   if (numberNotes >= 1 && devolucion >= 5) {
//     nameNotes = "billete/s";
//     nameCoin = "euros";
//     money = myChange[i];
//   } else if (numberNotes >= 1 && devolucion < 5 && devolucion >= 1) {
//     nameNotes = "moneda/s";
//     nameCoin = "euros";
//     money = myChange[i];
//   } else if (numberNotes >= 1 && devolucion < 1) {
//     nameNotes = "moneda/s";
//     nameCoin = "centimos";
//     money = myChange[i] * 100;
//   }
//   if (nameNotes !== "" && nameCoin !== "") {
//     entry.innerHTML = `${numberNotes} ${nameNotes} de ${money} ${nameCoin}`;
//     notes.appendChild(entry);
//   }
//   devolucion = Number((devolucion - numberNotes * myChange[i]).toFixed(2));
//   numberNotes = 0;
// }
