const numbers = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operators");
const resultsTile = document.querySelector(".results");
let result = "";
const displaySymbols = (e) => {
    const resultBtn = document.querySelector("#equel");
    const clearBtn = document.querySelector("#clear");
    const delateBtn = document.querySelector("#delate");
    const target = e.target;
    let updateValue = (resultsTile.innerHTML += target.innerHTML);
    resultBtn.addEventListener("click", () => displayResult(updateValue));
    clearBtn.addEventListener("click", clearSymbols);
    delateBtn.addEventListener("click", () => { });
    console.log(delateBtn);
};
const clearSymbols = () => {
    resultsTile.innerHTML = "";
};
const displayResult = (value) => {
    resultsTile.innerHTML = "";
    if (value === "") {
        return;
    }
    result = eval(value);
    resultsTile.innerHTML = result;
};
numbers.forEach((number) => {
    number.addEventListener("click", displaySymbols);
});
operators.forEach((operator) => {
    operator.addEventListener("click", displaySymbols);
});
