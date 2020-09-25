const inputValues = document.querySelectorAll(".box");
const displayInput = document.querySelector("#calc-input");

console.log(inputValues);

inputValues.addEventListener("click", () => {
    displayInput.innerHTML = inputValues.innerHTML;
});
