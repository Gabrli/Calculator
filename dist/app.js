import displaySymbols from "./renders/render-symbols.js";
const numbers = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operators");
const resultsTile = document.querySelector(".results");
let result;
const clearSymbols = () => {
    resultsTile.innerHTML = "";
};
const displayResult = (value) => {
    resultsTile.innerHTML = "";
    if (value === '') {
        return;
    }
    result = eval(value);
    resultsTile.innerHTML = result;
};
numbers.forEach((number) => {
    number.addEventListener("click", (e) => displaySymbols(e, displayResult, clearSymbols, resultsTile));
});
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => displaySymbols(e, displayResult, clearSymbols, resultsTile));
});
