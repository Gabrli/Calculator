const numbers: NodeList = document.querySelectorAll(".btn");
const operators: NodeList = document.querySelectorAll(".operators");
const resultsTile: HTMLElement = document.querySelector(".results");

let result = "";
const displaySymbols = (e: Event) => {
  const resultBtn: HTMLElement = document.querySelector("#equel");
  const clearBtn: HTMLElement = document.querySelector("#clear");
  const delateBtn: HTMLElement = document.querySelector("#delate");
  const target = e.target as HTMLButtonElement;
  let updateValue: string = (resultsTile.innerHTML += target.innerHTML);

  resultBtn.addEventListener("click", () => displayResult(updateValue));
  clearBtn.addEventListener("click", clearSymbols);
  delateBtn.addEventListener("click", () => {});
  console.log(delateBtn);
};

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
  number.addEventListener("click", displaySymbols);
});
operators.forEach((operator) => {
  operator.addEventListener("click", displaySymbols);
});
