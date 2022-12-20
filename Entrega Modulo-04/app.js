console.log("Aquí empieza la entrega del modulo 04");

//Funciones
var sumUp = (num1, num2) => num1 + num2;
var subtract = (num1, num2) => num1 - num2;
var multiply = (num1, num2) => num1 * num2;
var divide = (num1, num2) => num1 / num2;

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var valueInput1;
var valueInput2;

input1.addEventListener("keyup", () => (valueInput1 = Number(input1.value)));
input2.addEventListener("keyup", () => (valueInput2 = Number(input2.value)));

var handleCalculator = (type) => {
  if (!valueInput1 > 0 || !valueInput2 > 0) {
    alert("Error, inserte los dos números");
  } else {
    switch (type) {
      case "+":
        handleShowResult(sumUp(valueInput1, valueInput2));
        break;
      case "-":
        handleShowResult(subtract(valueInput1, valueInput2));
        break;
      case "*":
        handleShowResult(multiply(valueInput1, valueInput2));
        break;
      case "/":
        handleShowResult(divide(valueInput1, valueInput2));
        break;
    }
  }
};

var handleShowResult = (result) =>
  (document.getElementById("result").innerHTML = `The result is: ${result}`);

document.getElementById("sum").addEventListener("click", function () {
  handleCalculator("+");
});
document.getElementById("subtract").addEventListener("click", function () {
  handleCalculator("-");
});
document.getElementById("multiply").addEventListener("click", function () {
  handleCalculator("*");
});
document.getElementById("divide").addEventListener("click", function () {
  handleCalculator("/");
});
