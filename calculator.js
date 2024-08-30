// let prev_operand = 0;
// let operator = "";
// let current_operand = 0;
// let current_input = "";

const calc = {
  prev_operand: 0,
  operator: "",
  current_operand: 0,
  current_input: "",
};

const operators = ["+", "-", "*", "/"];

function printData() {
  console.log("prev_operand: ", calc.prev_operand);
  console.log("operator: ", calc.operator);
  console.log("current_operand: ", calc.current_operand);
  console.log("current_input: ", calc.current_input);
}

const buttons = document.querySelectorAll("button.number");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(`${e.target.value} clicked`);
    handleNumberClick(e.target.value);
  });
});

function handleNumberClick(number) {
  if (current_input === "") {
    calc.current_operand = parseInt(current_input);
  } else {
    left_operand = left_operand * 10 + parseInt(number);
  }
  calc.current_input += number;
  updateBottomDisplay(current_input);
}

const op_btns = document.querySelectorAll("button.operator");
op_btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(`${e.target.value} clicked`);
    handleOperatorClick(e.target.value);
  });
});

function containsOperator(string) {
  return (
    string.includes("+") ||
    string.includes("-") ||
    string.includes("*") ||
    string.includes("/")
  );
}

function handleOperatorClick(op) {
  if (calc.operator === "") {
    calc.operator = op;
    calc.current_input += op;
    updateTopDisplay(current_input);
    updateBottomDisplay("");
  } else {
    operate();
    calc.operator = "";
    updateBottomDisplay(calc.prev_operand);
    updateTopDisplay("");
  }
}

equal_btn = document.querySelector("button#equal");
equal_btn.addEventListener("click", () => {
  console.log("Equal clicked");
  operate();
  updateTopDisplay("");
  updateBottomDisplay(calc.prev_operand);
});

// TODO: implement when the user clicks on the '=' button
function operate() {
  let result = 0;
  if (calc.operator === "+") {
    result = calc.prev_operand + calc.current_operand;
  } else if (calc.operator === "-") {
    result = calc.prev_operand - calc.current_operand;
  } else if (calc.operator === "*") {
    result = calc.prev_operand * calc.current_operand;
  } else if (calc.operator === "/") {
    result = calc.prev_operand / calc.current_operand;
  }
  calc.prev_operand = result;
}

function updateTopDisplay(string) {
  const top_display = document.querySelector("div.top-display");
  top_display.textContent = string;
}

function updateBottomDisplay(string) {
  const top_display = document.querySelector("div.bottom-display");
  top_display.textContent = string;
}

const clear_btn = document.querySelector("button#clear");
clear_btn.addEventListener("click", () => {
  console.log("clear clicked");
  calc.prev_operand = 0;
  calc.current_operand = 0;
  calc.current_input = "";

  updateTopDisplay("");
  updateBottomDisplay("");
});

const ce_btn = document.querySelector("button#clear-entry");
ce_btn.addEventListener("click", () => {
  console.log("CE clicked");
  calc.current_input = "";
  updateTopDisplay("");
});

const del_btn = document.querySelector("button#delete");
del_btn.addEventListener("click", () => {
  console.log("delete clicked");
  if (current_input === "") {
    return;
  }
  calc.current_input = calc.current_input.slice(0, -1);

  updateTopDisplay(current_input);
});

const percent_btn = document.querySelector("button#pecent");
percent_btn.addEventListener("click", () => {
  console.log("percent clicked");
  if (current_input === "" || containsOperator(current_input)) {
    right_operand = right_operand / 100;
    calc.current_input = left_operand.toString() + calc.current_input;
  } else {
    left_operand = left_operand / 100;
    calc.current_input = left_operand.toString();
  }
  left_operand = left_operand / 100;
  updateTopDisplay(left_operand);
});
