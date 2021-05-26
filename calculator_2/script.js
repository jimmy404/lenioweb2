const numberButton = document.getElementsByName('number'),
  operatorButton   = document.getElementsByName('operator'),
  equalButton      = document.getElementsByName('equal')[0],
  deleteButton     = document.getElementsByName('delete')[0];

let result          = document.getElementById('result'),
  currentOperation  = '',
  previousOperation = '',
  operation         = undefined;

numberButton.forEach(function(button) {
  button.addEventListener('click', function() {
    addNumber(button.innerText);
  })
});

operatorButton.forEach(function(button) {
  button.addEventListener('click', function() {
    selectOperation(button.innerText);
  })
});

equalButton.addEventListener('click', function() {
  calculate();
  updateDisplay();
});

deleteButton.addEventListener('click', function() {
  clear();
  updateDisplay();
});
