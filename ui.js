//Since we are using defer and module type, we won't be able to reference onclick methods

document.addEventListener('DOMContentLoaded', () => {
    const outputLabel = document.querySelector('#outputLabel');

    //Used for keyboard
    const validKeys = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '+', '-', '*', '/', '%', '.', 'Enter'
    ];

    function appendToDisplay(input) {
        outputLabel.value += input;
        console.log(outputLabel.value);
    }

    function clearDisplay() {
        outputLabel.value = '';
    }

    //Do not use eval to calculate the total (do individual checks on operations)
    function calculateTotal() {
        try {
            outputLabel.value = eval(outputLabel.value);
        } catch (error) {
            outputLabel.value = 'Error'
        }
    }
    

    function makeNegative() {
        let expression = outputLabel.value;
        if (expression[0] === '-') {
            expression = expression.slice(1);
        } else {
            expression = '-' + expression;
        }
        outputLabel.value = expression;
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

    document.querySelector('#btnEqual').addEventListener('click', () => {
        calculateTotal();
    });

    document.querySelector('#btnNegative').addEventListener('click', () => {
        makeNegative();
    });

    document.querySelector('#btnPercent').addEventListener('click', () => {
        appendToDisplay('%');
        let expression = outputLabel.value;
        let number = parseFloat(expression.split('%')[0].trim());   //trim to remove whitespace
        outputLabel.value = number / 100;
    });

    //Improving calculator by allowing a user to enter valid keys
    document.addEventListener('keydown', (event) => {
        try {
            if (validKeys.includes(event.key)) {
                if (event.key === 'Enter') {
                    calculateTotal();
                    return;
                } else {
                    appendToDisplay(event.key);
                }
            }
        } catch (error) {
            console.error(error);
        }
    });
});
