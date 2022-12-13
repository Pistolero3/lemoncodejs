console.log("Aqui empieza la parte obligatoria de la entrega 03");

const product = { count: 3, price: 12.55, type: "alimentacion" };

//Calcular precio sin IVA con ternario
let totalSinIva = product.count <= 0 ? 0 : product.count * product.price;

//Calcular precio sin Iva con if/else
// let totalSinIva = 0;
// if (product.count <= 0) {
//     totalSinIva = 0
// } else {
//     totalSinIva = product.count * product.price;
// }

console.log("El precio total sin IVA es: ", totalSinIva);

let unidadConIva = 0;

switch (product.type) {
  case "alimentacion":
    unidadConIva = product.price * 0.1 + product.price;
    break;
  case "libro":
    unidadConIva = product.price * 0.04 + product.price;
    break;
  default:
    unidadConIva = product.price * 0.21 + product.price;
    break;
}

product.count <= 0
  ? console.log("No hay productos disponibles")
  : console.log("Esto es una unidad con IVA: ", unidadConIva);

let precioFinal = product.count <= 0 ? 0 : unidadConIva * product.count;
console.log("El precio total con IVA es: ", precioFinal);

function getTotalVat(product) {
  return product.count <= 0 ? 0 : unidadConIva * product.count;
}

console.log(
  "El precio total con IVA usando la funcion es: ",
  getTotalVat(product)
);

console.log("Aqui empieza la parte opcional de la entrega 03");

const empleado = {
  bruto: 40000,
  hijos: 1,
  pagas: 12,
};

let netoAnual = 0;

if (empleado.bruto <= 12000 && empleado.hijos > 0) {
  netoAnual = empleado.bruto;
} else if (
  empleado.bruto > 12000 &&
  empleado.bruto <= 24000 &&
  empleado.hijos > 0
) {
  netoAnual = empleado.bruto - empleado.bruto * 0.06;
} else if (empleado.bruto > 24000 && empleado.bruto <= 34000) {
  netoAnual = empleado.bruto - empleado.bruto * 0.14;
} else if (empleado.bruto > 34000) {
  netoAnual = empleado.bruto - empleado.bruto * 0.28;
}

if (empleado.bruto <= 12000 && empleado.hijos <= 0) {
  netoAnual = empleado.bruto;
} else if (
  empleado.bruto > 12000 &&
  empleado.bruto <= 24000 &&
  empleado.hijos <= 0
) {
  netoAnual = empleado.bruto - empleado.bruto * 0.08;
} else if (
  empleado.bruto > 24000 &&
  empleado.bruto <= 34000 &&
  empleado.hijos <= 0
) {
  netoAnual = empleado.bruto - empleado.bruto * 0.16;
} else if (empleado.bruto > 34000 && empleado.hijos <= 0) {
  netoAnual = empleado.bruto - empleado.bruto * 0.3;
}

console.log("Su neto anual es de: ", netoAnual);

let netoMensual = netoAnual / empleado.pagas;

console.log("Su neto menusal es de: ", netoMensual);
