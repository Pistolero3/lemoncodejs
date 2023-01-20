console.log("Entrega Modulo 7 - Regex");

console.log("******************Validar un IBAN Caso 1**********************");

const values = ["ES6600190020961234567890"];

function validIBAN(values) {
  const pattern = /^[A-Z]{2}\d{22}$/;

  values.forEach((value) => {
    console.log(`is this IBAN "${value}" correct? -> `, pattern.test(value));
  });
}

validIBAN(values);

console.log("******************Validar un IBAN Caso 2**********************");

const values1 = [
  "ES6600190020961234567890",
  "ES66 0019 0020 9612 3456 7890",
  "Es66 0019 0020 9612 3456 7890",
  "ES66 00190020 96123456 7890",
  "ES66 0019 0020 9612 34567890",
];

function isIbanValid(values1) {
  const pattern1 = /^([A-Z]{2}\d{22})|([A-Z]{2}\d{2}\s(\d{4}\s){4}\d{4})$/;

  values1.forEach((value) => {
    console.log(`is this IBAN ${value} correct? -> `, pattern1.test(value));
  });
}

isIbanValid(values1);

console.log("******************Validar un IBAN Caso 3**********************");

const values2 = [
  "ES6600190020961234567890",
  "ES66 1120 0020 9612 3456 7890",
  "FB99 1120 0020 9612 3456 7890",
];

function getIbanInfo(values2) {
  const pattern2 =
    /^(([A-Z]{2})(\d{2})\d{20})|(([A-Z]{2})(\d{2})\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4})$/;

  values2.forEach((value) => {
    console.log(`IBAN ${value} -> `, pattern2.exec(value));
  });
}

getIbanInfo(values2);

console.log(
  "******************Validar matrícula coche Caso 1**********************"
);

const values3 = [
  "2021 GMD",
  "2345-GMD",
  "4532BDB",
  "0320-AAA",
  "320-AAA",
  "0320--AAA",
  "0320-AAa",
];

function isValidPlate(values3) {
  const pattern3 = /^\d{4}(\s{0,1}|-)[A-Z]{3}$/;

  values3.forEach((value) => {
    console.log(
      `Is the plate number ${value} correct? --> `,
      pattern3.test(value)
    );
  });
}

isValidPlate(values3);

console.log("*************Validar matrícula coche Caso 2***************");

var values4 = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

function getPlateInfo(values4) {
  const pattern4 = /^(\d{4})(\s{0,1}|-)([A-Z]{3})$/;

  values4.forEach((value) => {
    console.log(`Plate number ${value} --> `, pattern4.exec(value));
  });
}

getPlateInfo(values4);

console.log("******************OPCIONALES**********************");
console.log("*************Extraer imágenes de un fichero HTML**************");

function getImageUrl() {
  const pattern5 = /(https:\/\/.+(png|jpg))/m;

  var images = document.getElementsByTagName("img");
  var getImages = [];
  for (let i = 0; i < images.length; i++) {
    getImages.push(images[i].outerHTML);
  }

  getImages.forEach((img) => {
    console.log(`img src ${img} --> `, img.match(pattern5));
  });
}

getImageUrl();

console.log("*************Validar sintaxis tarjeta de crédito**************");

var values6 = [
  "5299 6400 0000 0000",
  "5299-6400-0000-0000",
  "5299640000000000",
];

function isCardValid(values6) {
  const pattern6 =
    /(5[0-5]\d{2}\s(\d{4}\s){2}\d{4})|((5[0-5]\d{2}-(\d{4}-){2}\d{4}))|((5[0-5]\d{2}(\d{4}){2}\d{4}))/;

  values6.forEach((value) => {
    console.log(
      `is this credit card ${value} correct? -> `,
      pattern6.test(value)
    );
  });
}

isCardValid(values6);

console.log("**********Extraer grupos de la tarjeta de crédito**********");

var values7 = [
  "5299 6400 0000 0000",
  "5299-6400-0000-0000",
  "5299640000000000",
];

function getCardInfo(values7) {
  const pattern7 =
    /((5[0-5]\d{2})\s(\d{4}\s)(\d{4}\s)(\d{4}))|(((5[0-5]\d{2})-(\d{4})-(\d{4})-(\d{4})))|(((5[0-5]\d{2})(\d{4})(\d{4})(\d{4})))/;

  values7.forEach((value) => {
    console.log(`Numbers of ${value} --> `, value.match(pattern7));
  });
}

getCardInfo(values7);

console.log("**********Buscar Expresiones regulares**********");

console.log("**********Validar Contrasena Moderada**********");

const pswdPatternMod = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;

let psswdValues = ["ddF1fjeaj", "sadfasdfasdf", "12Ddej", "12asAS#4"];

function valiPswMod(psswdValues) {
  const pswdPatternMod = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;

  psswdValues.forEach((value) => {
    console.log(
      `Is your pswd "${value}" safe? --> `,
      pswdPatternMod.test(value)
    );
  });
}

valiPswMod(psswdValues);

console.log("**********Validar Contrasena Compleja*********");

function valiPswComplex(psswdValues) {
  const pswdPatternComplex = /^(?=.+\d)(?=.+[a-z])(?=.+[A-Z])(?=.+[\W]).{8,}$/;

  psswdValues.forEach((value) => {
    console.log(
      `Is your pswd "${value}" safe? --> `,
      pswdPatternComplex.test(value)
    );
  });
}

valiPswComplex(psswdValues);

console.log("**********Validar URL**********");

let urlValues = [
  "https://www.lemoncode.net",
  "www.lemoncode.net",
  "lemoncode.net",
];

function validUrl(urlValues) {
  const urlPattern =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  urlValues.forEach((value) => {
    console.log(`Is your url "${value}" correct? --> `, urlPattern.test(value));
  });
}

validUrl(urlValues);

console.log("**********Numeros HEX**********");

let hexNumValues = ["#9CF47D", "#13D795", "#9CC7DA", "9CC7DA", "#9CC7D"];

function validHexNumber(hexNumValues) {
  const hexNumberPattern = /^#([a-fA-F0-9]){3}$|#[a-fA-F0-9]{6}$/;

  hexNumValues.forEach((value) => {
    console.log(
      `Is your color "${value}" correct? --> `,
      hexNumberPattern.test(value)
    );
  });
}

validHexNumber(hexNumValues);
