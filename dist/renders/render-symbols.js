const displaySymbols = (e, displayResult, clearSymbols, resultsTile) => {
    const resultBtn = document.querySelector("#equel");
    const clearBtn = document.querySelector("#clear");
    const target = e.target;
    let updateValue;
    if (target.innerHTML === "2^") {
        updateValue = resultsTile.innerHTML += "**";
    }
    else {
        updateValue = resultsTile.innerHTML += target.innerHTML;
    }
    resultBtn.addEventListener("click", () => displayResult(updateValue));
    clearBtn.addEventListener("click", clearSymbols);
};
export default displaySymbols;
