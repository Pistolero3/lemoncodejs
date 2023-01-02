console.log("Entraga modulo 6 - Algoritmos 2");

//Enigma

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var plainInputText = "";
var encriptedInputText = "";

var getPlainInputText = () => {
  plainInputText = document.getElementById("plaininput").value.toLowerCase();
  return plainInputText;
};

var getEncriptedInputText = () => {
  encriptedInputText = document
    .getElementById("encryptedinput")
    .value.toLowerCase();
  return encriptedInputText;
};

function encrypt(word) {
  var message = "";

  for (let i = 0; i < word.length; i++) {
    var encryptedLetter;
    var indexPlain = plainAlphabet.indexOf(word[i]);

    if (indexPlain !== -1) {
      encryptedLetter = encryptedAlphabet.slice(indexPlain, indexPlain + 1);
      message += encryptedLetter;
    } else {
      message += word[i];
    }
  }
  document.getElementById("encryptedinput").value = message;
  message = "";
}

function decrypt(word) {
  var encriptedMessage = "";

  for (let i = 0; i < word.length; i++) {
    var indexEncripted = encryptedAlphabet.indexOf(word[i]);
    var alphabetLetter;

    if (indexEncripted !== -1) {
      alphabetLetter = plainAlphabet.slice(indexEncripted, indexEncripted + 1);
      encriptedMessage += alphabetLetter;
    } else {
      encriptedMessage += word[i];
    }
  }
  document.getElementById("plaininput").value = encriptedMessage;
  encriptedMessage = "";
}

function clear() {
  document.getElementById("plaininput").value = "";
  document.getElementById("encryptedinput").value = "";
}

document.getElementById("plaininput").addEventListener("change", function () {
  getPlainInputText();
});
document
  .getElementById("encryptedinput")
  .addEventListener("change", function () {
    getEncriptedInputText();
  });
document.getElementById("encryptbutton").addEventListener("click", function () {
  encrypt(plainInputText);
});
document.getElementById("decryptbutton").addEventListener("click", function () {
  decrypt(encriptedInputText);
});

document.getElementById("clearbutton").addEventListener("click", function () {
  clear();
});

//Generador Aleatorio
var randomPick = (n, min, max) => {
  let firstNumber;
  let secondNumber = 101;
  let result = [];
  for (i = 0; i < n; i++) {
    const range = max - min + 1;
    firstNumber = Math.floor(Math.random() * range);
    if (secondNumber !== firstNumber) {
      result.push(firstNumber);
      secondNumber = firstNumber;
    } else {
      n = n + 1;
    }
  }
  return result;
};

console.log(randomPick(10, 0, 100));
