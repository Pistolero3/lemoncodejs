console.log("Entrega Modulo 10");

const person = {
  name: "Antonio",
  surname: "Morales",
  id: 3,
};

const person1 = {
  name: "Pepito",
  surname: "Peres",
};

const numbers = [10, 2, 5, 4, 8];
const words = [
  "Amancio",
  "Alhama",
  "Objeto",
  "Helado",
  "astro",
  "aroma",
  "zelda",
  "total",
  "algarroba",
];

console.log("************** hasId ********************");

const hasId = ({ id }) => (id ? true : false);
console.log(hasId(person));

console.log("************** head ********************");

const head = ([first]) => first;
console.log(head(numbers));

console.log("************** tail ********************");

const tail = ([, ...rest]) => rest;
console.log(tail(numbers));

console.log("************** swapFirstToLast ********************");

const swapFirstToLast = ([first, ...rest]) => {
  rest.push(first);
  return rest;
};
console.log(swapFirstToLast(numbers));

console.log("************** excludeId ********************");

const excludedId = ({ id, ...newPerson }) => newPerson;
console.log(excludedId(person));

console.log("************** wordsStartingWithA ********************");

const wordsStartingWithA = (words) =>
  words.filter((word) => word[0] === "a" || word[0] === "A");
console.log(wordsStartingWithA(words));

console.log("************** concat ********************");

const concat = (...strings) =>
  strings.reduce((acc, string) => {
    acc += " | " + string;
    return acc;
  });
console.log(concat("Hola", "soy", "Antonio"));

console.log("************** multArray ********************");

const multArray = (arr, x) => arr.map((element) => element * x);
console.log(multArray(numbers, 3));

console.log("************** calcMult ********************");

const calcMult = (...numbers) =>
  numbers.reduce((acc, number) => {
    acc = acc * number;
    return acc;
  });

console.log(calcMult(3, 2, 1, 3));

console.log("************** EJERCICIOS EXTRA ********************");
console.log("************** swapFirstSecond ********************");

const swapFirstSecond = ([first, ...rest]) => {
  rest.splice(1, 0, first);
  return rest;
};
console.log(swapFirstSecond(words));

console.log("************** firstEqual ********************");

const firstEqual = (x, ...strings) =>
  strings.every((string) => (string.startsWith(x) ? true : false));
console.log(firstEqual("a", "amor", "azores", "vida"));

console.log("************** longest ********************");

const longest = (...arrays) => {
  return arrays.sort((a, b) => (b.length > a.length ? 1 : -1)).shift();
};
console.log(longest([1, 2, 3], ["a", "b", true, false, 2, 5], numbers));

console.log("************** searchInStringV1 ********************");

const searchInStringV1 = (string, character) => {
  let count = 0;
  Array.from(string).reduce((total, letter) => {
    letter === character ? count++ : total++;
  }, 0);
  return count;
};

console.log(searchInStringV1("supercalifragilisticoespialidoso", "i"));

console.log("************** searchInStringV2 ********************");

const searchInStringV2 = (string, character) => {
  let result = 0;
  Array.from(string).map((letter) => {
    if (letter === character) {
      result++;
    }
  });
  return result;
};

console.log(searchInStringV2("esternocleidomastoideo", "o"));

console.log("************** sortCharacters ********************");

const myString = "lkjhgfdsamnbv";

const sortCharacters = (string) => {
  return Array.from(string).sort().toString();
};

console.log(sortCharacters(myString));

console.log("************** shout ********************");

const shout = (...words) => {
  return words.map((word) => "¡" + word.toUpperCase() + "!").join("");
};

console.log(shout("hola", "tienes", "un", "bicho"));

console.log("************** SHOPPING LIST ********************");

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

console.log("************** SHOPPING LIST Adding IVA ********************");

const addingIva = (lists) => {
  return lists.map(
    (list) =>
      (list = {
        ...list,
        iva: Number(list.price * 0.21).toFixed(2),
      })
  );
};

console.log(addingIva(shoppingCart));

console.log("******** SHOPPING LIST Sorting by Units *************");

const sortList = (lists) => {
  return lists.sort((a, b) => a.units - b.units);
};

console.log(sortList(shoppingCart));

console.log("******** SHOPPING LIST Drogueria Subtotal **************");

const calcSubtotal = (lists, category) => {
  let subtotal = 0;
  lists
    .filter((list) => list.category === category)
    .map((list) => (subtotal += list.price * list.units));
  return `El subtotal para la categoria ${category} es ${subtotal}`;
};

console.log(calcSubtotal(shoppingCart, "Droguería"));

console.log("******** SHOPPING LIST por Consola **************");

const consoleList = (lists) => {
  return lists
    .sort((a, b) =>
      a.category < b.category ? -1 : a.category > b.category ? 1 : 0
    )
    .forEach(({ product, price, units }) =>
      console.log(`${product} -> ${price * units} Euros`)
    );
};

consoleList(shoppingCart);
