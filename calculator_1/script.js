function clearDisplay() {
  document.getElementById("outputDisplay").innerHTML = "0";
}

function removeZero() {
  let value = document.getElementById("outputDisplay").innerHTML;
  if (value === "0") {
    value = " ";
    document.getElementById("outputDisplay").innerHTML = value;
  }
}

function printValueButton(value) {
  removeZero();
  document.getElementById("outputDisplay").innerHTML += value;
}

function mathOperationResult() {
  removeZero();
  let mathOperation = document.getElementById("outputDisplay").innerHTML;
  let solvedMathOperation = eval(mathOperation);
  document.getElementById('outputDisplay').innerHTML = solvedMathOperation;
}
