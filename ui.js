//Use to manipulate the DOM

//buttons
const btnClear = document.querySelector('#btnAC');
const btnNegative = document.querySelector('#btnNegative');
const btnPercent = document.querySelector('#btnPercent');

const btnAdd = document.querySelector('#btnAdd');
const btnSubtract = document.querySelector('#btnSubtract');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');
const btnEqual = document.querySelector('#btnEqual');

let total = 0;

//Since we are using defer and module type, we won't be able to reference onclick methods

document.addEventListener('DOMContentLoaded', () => {
    const outputLabel = document.querySelector('#outputLabel');

    function appendToDisplay(input) {
        outputLabel.value += input;
        console.log(outputLabel.value);
    }

    function clearDisplay() {
        outputLabel.value = '';
    }

    //Do not use eval to calculate the total (do individual checks on operations)
    function calculateTotal() {

    }

    //Event listener to numbe rbuttons
    document.querySelectorAll('.number-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            appendToDisplay(button.innerText);
        });
    });

    document.querySelector('#btnClear').addEventListener('click', () => {
        clearDisplay();
    });
});
