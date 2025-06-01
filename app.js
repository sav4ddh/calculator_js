let numberToBeOperated = "";
let result;
let isShouldBeResetted = false;
let toBeCalculated = "";
let display = document.getElementById("screenValue");
let operatorIcon = document.getElementById("operatorValue");
let prevInput = document.getElementById("prevInput");

// // To Debug Code..
// function test() {
//   console.log({
//     numberToBeOperated,
//     result,
//     toBeCalculated,
//   });
// }

function setDigit(input) {
  if (isShouldBeResetted) {
    numberToBeOperated = input;
    display.innerHTML = numberToBeOperated;
    isShouldBeResetted = false;
  } else {
    numberToBeOperated += input;
    display.innerText = numberToBeOperated;
  }
}

function deleteButton() {
  numberToBeOperated = numberToBeOperated.toString().slice(0, -1);
  display.innerHTML = numberToBeOperated;
}

function resetButton() {
  display.innerHTML = 0;
  numberToBeOperated = "";
  operatorIcon.innerHTML = "";
}

function operatorButton(operator) {
  isShouldBeResetted = false;
  if (toBeCalculated === null) {
    toBeCalculated = numberToBeOperated + operator;
    numberToBeOperated = "";
    display.innerHTML = "";
    operatorIcon.innerHTML = operator;
    prevInput.innerHTML = toBeCalculated;
  } else {
    toBeCalculated = toBeCalculated + numberToBeOperated + operator;
    numberToBeOperated = "";
    display.innerHTML = null;
    operatorIcon.innerHTML = operator;
    prevInput.innerHTML = toBeCalculated;
  }
}

function calculateButton() {
  try {
    if (numberToBeOperated == "" || toBeCalculated == "") {
      toBeCalculated = "";
      display.innerHTML = "Syntax error";
    } else {
      toBeCalculated = toBeCalculated + numberToBeOperated;
      result = eval(toBeCalculated);
      numberToBeOperated = result;
      display.innerHTML = result;
      prevInput.innerHTML = toBeCalculated;
      toBeCalculated = "";
    }
  } catch (error) {
    toBeCalculated = "";
    display.innerHTML = "Syntax error";
  }
  operatorIcon.innerHTML = "";
  isShouldBeResetted = true;
}
