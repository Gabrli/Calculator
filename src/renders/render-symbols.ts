const displaySymbols = (
  e: Event,
  displayResult: (value: string) => void,
  clearSymbols: () => void,

  resultsTile: HTMLElement
) => {
  const resultBtn: HTMLElement = document.querySelector("#equel");
  const clearBtn: HTMLElement = document.querySelector("#clear");

  const target = e.target as HTMLButtonElement;

  let updateValue: string;
  if (target.innerHTML === "2^") {
    updateValue = resultsTile.innerHTML += target.innerHTML = "**";
  } else {
    updateValue = resultsTile.innerHTML += target.innerHTML;
  }

  resultBtn.addEventListener("click", () => displayResult(updateValue));
  clearBtn.addEventListener("click", clearSymbols);
};
export default displaySymbols;
