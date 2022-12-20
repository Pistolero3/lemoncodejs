console.log("Aquí empieza la entrega del modulo 04 Extra: Calculadora");

//Funciones
var sumUp = (num1, num2) => num1 + num2;
var subtract = (num1, num2) => num1 - num2;
var multiply = (num1, num2) => num1 * num2;
var divide = (num1, num2) => num1 / num2;

var input;
var total = 0;

var handlTakeInput = () => {
  input = Number(document.getElementById("input").value);
  document.getElementById("input").value = "";
  return input;
};

var handleClear = () => {
  total = 0;
  document.getElementById("result").value = "";
  ultimaOperacion = "";
};

var handleShowResult = () => {
  handleCalculator(ultimaOperacion);
  document.getElementById("result").value = total;
  total = 0;
};


let ultimaOperacion;

var handleCalculator = (type) => {
  if (!ultimaOperacion) {
    ultimaOperacion = type;
    total = input;
  } else {
    switch (ultimaOperacion) {
      case "+":
        total = sumUp(total, input);
        break;
      case "-":
        total = subtract(total, input);
        break;
      case "*":
        total = multiply(total, input);
        break;
      case "/":
        total = divide(total, input);
        break;
    }
    ultimaOperacion = type;
  }
};

document.getElementById("input").addEventListener("change", handlTakeInput);
document.getElementById("sum").addEventListener("click", () => {
  handleCalculator("+");
});
document.getElementById("subtract").addEventListener("click", () => {
  handleCalculator("-");
});
document.getElementById("multiply").addEventListener("click", () => {
  handleCalculator("*");
});
document.getElementById("divide").addEventListener("click", () => {
  handleCalculator("/");
});
document.getElementById("igual").addEventListener("click", handleShowResult);
document.getElementById("clear").addEventListener("click", handleClear);


