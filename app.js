let numberToBeOperated = "";
let result;
let toBeCalculated = "";
let display = document.getElementById("screenValue");
let operatorIcon = document.getElementById("operatorValue");

// To Debug Code..
function test() {
  console.log({
    numberToBeOperated,
    result,
    toBeCalculated,
  });
}

function setDigit(input) {
  numberToBeOperated += input;
  display.innerText = numberToBeOperated;
  test();
}

function deleteButton() {
  numberToBeOperated = numberToBeOperated.toString().slice(0, -1);
  display.innerText = numberToBeOperated;
  test();
}

function resetButton() {
  display.innerText = 0;
  numberToBeOperated = "";
  test();
  operatorIcon.innerHTML = "";
}

function operatorButton(operator) {
  if (toBeCalculated === null) {
    toBeCalculated = numberToBeOperated + operator;
    numberToBeOperated = "";
    display.innerHTML = "";
    operatorIcon.innerHTML = operator;
  } else {
    toBeCalculated = toBeCalculated + numberToBeOperated + operator;
    numberToBeOperated = "";
    display.innerHTML = null;
    operatorIcon.innerHTML = operator;
  }
  test();
}

function calculateButton() {
  try {
    toBeCalculated = toBeCalculated + numberToBeOperated;
    result = eval(toBeCalculated);
    numberToBeOperated = result;
    display.innerHTML = result;
    toBeCalculated = "";
    test();
  } catch (error) {
    toBeCalculated = "";
    display.innerHTML = "Syntax error";
    test();
  }
  operatorIcon.innerHTML = "";
}
