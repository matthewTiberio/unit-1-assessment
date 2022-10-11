let displayValue = 0;

const displayField = document.querySelector(".display");
const addBtn = document.querySelector(".add");
const inputField = document.querySelector(".input");
const minusBtn = document.querySelector(".minus");

addBtn.addEventListener("click", addValue);
minusBtn.addEventListener("click", subtractValue);
inputField.addEventListener("blur", checkInput);

init();

function init() {
  inputField.value = 1;
}

function addValue() {
  displayValue += parseInt(inputField.value);
  displayNew();
}

function subtractValue() {
  displayValue -= parseInt(inputField.value);
  displayNew();
}

function displayNew() {
  if (displayValue < 0) {
    displayField.style.color = "red";
  } else {
    displayField.style.color = "black";
  }
  displayField.textContent = displayValue;
}

function checkInput() {
  if (isNaN(inputField.value) || inputField.value === "") {
    inputField.value = 1;
  }
}
