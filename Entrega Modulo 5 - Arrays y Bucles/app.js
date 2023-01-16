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

const showChart = (compra) => {
  for (compra of carrito) {
    mostrarCarrito(compra);
  }
};

function mostrarCarrito(compra) {
  console.log("--------ITEM--------");
  for (propiedad in compra) {
    console.log(propiedad.toUpperCase() + ": " + compra[propiedad]);
  }
}

console.log("************Eliminar el Producto 54657 del carrito*************");

const deleteProduct = (carrito, id) => {
  let indice;
  for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id == id) {
      indice = i;
    }
  }

  carrito.splice(indice, 1);

  for (compra of carrito) {
    mostrarCarrito(compra);
  }
};

deleteProduct(carrito, "54657");

console.log("************Calcular el total de la compra*************");

let total = 0;

const calcularCompra = (carrito) => {
  for (i = 0; i < carrito.length; i++) {
    total += carrito[i].price * carrito[i].count;
  }
  return parseFloat(total).toFixed(2);
};

console.log(`El total de su compra es: ${calcularCompra(carrito)}`);

console.log("************Filtrar los productos Premium*************");

const chartFilter = (carrito) => {
  let premiumProducts = [];
  for (compra of carrito) {
    if (compra.premium) {
      premiumProducts.push(compra);
    }
  }
  for (compra of premiumProducts) {
    mostrarCarrito(compra);
  }
};
chartFilter(carrito);

console.log("************Opcional, mensaje gasto de envío*************");

function comprobarPremiun(carrito) {
  let sinGastos = true;
  for (compra of carrito) {
    sinGastos = sinGastos && compra.premium;
  }

  if (sinGastos) {
    console.log("Pedido sin gastos de envío");
  } else {
    console.log("Este pedido tiene gastos de envío");
  }
}

comprobarPremiun(carrito);

console.log("************Opcional, imprimir la lista en html*************");

const printShoppingList = () => {
  const list1 = document.getElementById("lista");
  const list2 = document.getElementById("lista2");
  for (compra of carrito) {
    const line = document.createElement("li");
    line.textContent = `Item: ${compra.name}`;
    list1.appendChild(line);
    const line2 = document.createElement("li");
    line2.textContent = `Price: ${compra.price} / Quantity: ${compra.count}`;
    list2.appendChild(line2);
  }
};

printShoppingList();

console.log("************Opcional, Descuento del 5%*************");

const getDiscount = (total) => {
  if (total > 100) {
    total = total - total * 0.05;
    console.log(`Su total con descuento es: ${parseFloat(total).toFixed(2)}`);
    document.getElementById(
      "precio"
    ).innerHTML = `Su precio total con descuento es: ${parseFloat(
      total
    ).toFixed(2)} euros`;
  } else {
    console.log("Su compra no es superior a 100 euros y no tiene descuento");
    document.getElementById(
      "precio"
    ).innerHTML = `Su precio total es: ${parseFloat(total).toFixed(2)} euros`;
  }
};

getDiscount(total);
