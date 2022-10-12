// /*To do
// ** add backspace functionality

const result = document.getElementById("result");

const calculate = (number) => {
  result.value += number;
  console.log("BTN success");
};

const equals = () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Enter a valid operator!");
  }
};

// * add backspace functionality
const del = () => {
  result.value = result.value.slice(0, -2);
  console.log("DEL success");
};

// const clear = () => {
//   result.value = "";
//   console.log("ClR success");
// };
