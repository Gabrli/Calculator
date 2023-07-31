const displaySymbols = (e, displayResult, clearSymbols, resultsTile) => {
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
export default displaySymbols;
