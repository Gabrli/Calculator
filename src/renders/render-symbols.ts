const displaySymbols = (
  e: Event,
  displayResult: (value: string) => void,
  clearSymbols: () => void,
  resultsTile: HTMLElement
) => {
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
export default displaySymbols;
