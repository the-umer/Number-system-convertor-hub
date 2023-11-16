"use strict";
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.querySelector(".btn-equals");
const calcArea = document.querySelector(".calculation-area");
const clearAllBtn = document.querySelector(".btn-clear");
const clearOneBtn = document.querySelector(".btn-clear-one");

const calculate = (expression) => eval(`${expression}`);

clearAllBtn.addEventListener("click", () => {
  calcArea.innerText = "0";
});

clearOneBtn.addEventListener("click", () => {
  if (calcArea.innerText.length > 1) {
    calcArea.innerText = calcArea.innerText.slice(0, -1);
  } else {
    calcArea.innerText = "0";
  }
});

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (
      !button.classList.contains("btn--special-green") &&
      !button.classList.contains("btn-nodisplay")
    ) {
      if (calcArea.innerText.length == 1 && calcArea.innerText == "0") {
        calcArea.innerText = button.innerText;
      } else {
        calcArea.innerText += button.innerText;
      }
    }
  });
}

equalBtn.addEventListener("click", () => {
  const result = calculate(calcArea.innerText.replace("x", "*"));
  calcArea.innerText = result;
});