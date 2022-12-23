console.log("Entrega Modulo 5 - Arrays y Bucles");

const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

console.log("************Listar todos los productos*************");

for (compra of carrito) {
  mostrarCarrito(compra);
}

function mostrarCarrito(compra) {
  console.log("--------ITEM--------");
  for (propiedad in compra) {
    console.log(propiedad.toUpperCase() + ": " + compra[propiedad]);
  }
}

console.log("************Eliminar el Producto 54657 del carrito*************");

let indice;
for (i = 0; i < carrito.length; i++) {
  if (carrito[i].id == "54657") {
    indice = i;
  }
}

carrito.splice(indice, 1);

for (compra of carrito) {
  mostrarCarrito(compra);
}

console.log("************Calcular el total de la compra*************");

let total = 0;

let calcularCompra = (carrito) => {
  for (i = 0; i < carrito.length; i++) {
    total += carrito[i].price * carrito[i].count;
  }
  return parseFloat(total).toFixed(2);
};

console.log(`El total de su compra es: ${calcularCompra(carrito)}`);

console.log("************Filtrar los productos Premium*************");

let premiumProducts = [];
for (compra of carrito) {
  if (compra.premium) {
    premiumProducts.push(compra);
  }
}
for (compra of premiumProducts) {
  mostrarCarrito(compra);
}

console.log("************Opcional, mensaje gasto de envío*************");

function comprobarPremiun(carrito) {
  let sinGastos = true;
  for (compra of carrito) {
    sinGastos = sinGastos && compra.premium;
  }
  return sinGastos;
}

if (comprobarPremiun(carrito)) {
  console.log("Pedido sin gastos de envío");
} else {
  console.log("Este pedido tiene gastos de envío");
}

console.log("************Opcional, imprimir la lista en html*************");

const list = document.getElementById("lista");
for (compra of carrito) {
  const line = document.createElement("li");
  line.textContent = `Item: ${compra.name}`;
  list.appendChild(line);
}

const list2 = document.getElementById("lista2");
for (compra of carrito) {
  const line2 = document.createElement("li");
  line2.textContent = `Price: ${compra.price} / Quantity: ${compra.count}`;
  list2.appendChild(line2);
}

console.log("************Opcional, Descuento del 5%*************");

if (total > 100) {
  total = total - total * 0.05;
  console.log(`Su total con descuento es: ${parseFloat(total).toFixed(2)}`);
  document.getElementById(
    "precio"
  ).innerHTML = `Su precio total con descuento es: ${parseFloat(total).toFixed(
    2
  )} euros`;
} else {
  console.log("Su compra no es superior a 100 euros y no tiene descuento");
  document.getElementById(
    "precio"
  ).innerHTML = `Su precio total es: ${parseFloat(total).toFixed(2)} euros`;
}
