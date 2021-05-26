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

function selectOperation(arithmeticOperation) {
  if ( currentOperation === '' ) return;
  if ( previousOperation !== '' ) {
    calculate();
  }
  operation = arithmeticOperation.toString();
  previousOperation = currentOperation;
  currentOperation = '';
}

function calculate() {
  let calculate;
  const previousOp = parseFloat(previousOperation);
  const currentOp  = parseFloat(currentOperation);

  if(isNaN(previousOp) || isNaN(currentOp)) return;

  switch(operation) {
    case '+':
      calculate = previousOp + currentOp;
      break;
    case '-':
      calculate = previousOp - currentOp;
      break;
    case 'x':
      calculate = previousOp * currentOp;
      break;
    case '/':
      calculate = previousOp / currentOp;
      break;
    default:
      return;
  }

  currentOperation = calculate;
  operation = undefined;
  previousOperation = '';
}

function addNumber(number) {
  currentOperation = currentOperation.toString() + number.toString();
  updateDisplay();
}

function clear() {
  currentOperation = '';
  previousOperation = '';
  operation = undefined;
}
