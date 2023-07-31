import displaySymbols from "./renders/render-symbols.js";
const numbers: NodeList = document.querySelectorAll(".btn");
const operators: NodeList = document.querySelectorAll(".operators");
const resultsTile: HTMLElement = document.querySelector(".results p");

let result: string;

const clearSymbols = () => {
  resultsTile.innerHTML = "";
};

const displayResult = (value: string) => {
  resultsTile.innerHTML = "";
  if (value === "") {
    return;
  }

  result = eval(value);
  resultsTile.innerHTML = result;
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) =>
    displaySymbols(e, displayResult, clearSymbols, resultsTile)
  );
});
operators.forEach((operator) => {
  operator.addEventListener("click", (e) =>
    displaySymbols(e, displayResult, clearSymbols, resultsTile)
  );
});
