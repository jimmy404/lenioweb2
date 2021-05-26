const numberButton = document.getElementsByName('number'),
  operatorButton   = document.getElementsByName('operator'),
  equalButton      = document.getElementsByName('equal')[0],
  deleteButton     = document.getElementsByName('delete')[0];

let result          = document.getElementById('result'),
  currentOperation  = '',
  previousOperation = '',
  operation         = undefined;
