// DECLARING VARIABLES
const display = document.querySelector("#display");
const btnControls = document.querySelector("#controls").children;
const buttons = document.querySelector("button");
const clear = document.querySelector("#clear");
const equals = document.querySelector(".equal");
const allSymbols = ["C", "/", "%", "<", "-", "x", "="];

// Declared fumction into empty string to store user input
let firstValue = "";
let secondValue = "";
let symbol = "";
let result = "";

// CALCULATE FUNCTION
const calculate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  if (symbol === "+") {
    result = firstValue + secondValue;
  }
  if (symbol === "-") {
    result = firstValue - secondValue;
  }
  if (symbol === "x") {
    result = firstValue * secondValue;
  }
  if (symbol === "/") {
    result = firstValue / secondValue;
  }
  if (symbol === "%") {
    result = firstValue % secondValue;
  }
  display.innerText = result;
  firstValue = result;
  secondValue = "";
};

//Looping through different conditions for the buttons

for (let button of btnControls) {
  button.addEventListener("click", () => {
    const { innerText: btnValue } = button;

    const btnvalueIsSymbol = allSymbols.includes(btnValue);

    if (firstValue && btnvalueIsSymbol) {
      if (secondValue) {
        calculate();
      }
      symbol = btnValue;
    } else if (!symbol) {
      firstValue += btnValue;
    } else if (symbol) {
      secondValue += btnValue;
    }
    if (!secondValue && btnValue === "=") {
      return null;
    }
    if (btnValue === "C") {
      firstValue = secondValue = symbol = " ";
      return null;
    }
    // if (btnValue === "<") {
    //   firstValue = secondValue = symbol = "";
    //   display.innerText += Array.from(btnValue).pop();
    // }
    if (btnValue !== "=") {
      display.innerText += btnValue;
    }
    console.log(Array.isArray(Array.from(btnValue)));
  });
}

/*To do
* add backspace functionality

* if last character in the display is a symbol and the user clicks another symbol, replace the new symbol with the next
*/
