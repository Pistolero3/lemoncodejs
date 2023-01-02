console.log("Entrega modulo 6 - Algoritmos 1");

// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

document.getElementById("calcular").disabled = true;

function createInputProduct(description, units, stock) {
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("max", stock);
  input.setAttribute("min", 0);
  input.setAttribute("id", description);
  input.setAttribute("value", units);
  input.addEventListener("change", (event) => getUnits(event));
  return input;
}

for (let product of products) {
  const list = document.createElement("li");
  list.setAttribute("class", "product-unit");
  list.textContent = `${product.description} - ${product.price}/ud.`;
  const newInput = createInputProduct(
    product.description,
    product.units,
    product.stock
  );
  list.appendChild(newInput);

  var container = document.getElementById("container");
  container.appendChild(list);
}

//coger las unidades
function getUnits(event) {
  event.preventDefault();
  const unidades = Number(event.target.value);
  const inputUpdated = event.target.id;

  for (let product of products) {
    if (product.description === inputUpdated) {
      product.units = unidades;
    }
    activateButton();
  }
}

//calcular el precio de un producto y el iva
let subtotal = 0;
let iva = 0;
let ivaAcumulado = 0;

function totalProduct(products) {
  for (let product of products) {
    if (product.tax === REGULAR_TYPE && product.units > 0) {
      iva = iva + (product.price * REGULAR_TYPE) / 100;
      ivaAcumulado += iva * product.units;
      subtotal = subtotal + (product.price - iva) * product.units;
    } else if (product.tax === LOWER_TYPE && product.units > 0) {
      iva = (product.price * LOWER_TYPE) / 100;
      ivaAcumulado += iva * product.units;
      iva;
      subtotal = subtotal + (product.price - iva) * product.units;
    } else {
      subtotal = subtotal + product.price * product.units;
    }
  }
  return ivaAcumulado, subtotal;
}

//calcular el precio del carrito de la compra
let calculateTotal = (ivaAcumulado, subtotal) => {
  const total = ivaAcumulado + subtotal;
  document.getElementById("subtotal").innerHTML = `Subtotal: ${Number(
    subtotal.toFixed(2)
  )} Euros`;
  document.getElementById("iva").innerHTML = `Iva: ${Number(
    ivaAcumulado.toFixed(2)
  )} Euros`;
  document.getElementById("total").innerHTML = `Total: ${Number(
    total.toFixed(2)
  )} Euros`;
};

document.getElementById("calcular").addEventListener("click", function () {
  totalProduct(products);
  calculateTotal(ivaAcumulado, subtotal);
  subtotal = 0;
  ivaAcumulado = 0;
  total = 0;
});

function activateButton() {
  var unites = 0;
  for (let product of products) {
    unites += product.units;
  }
  unites > 0
    ? (document.getElementById("calcular").disabled = false)
    : (document.getElementById("calcular").disabled = true);
}
