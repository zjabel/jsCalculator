let numbers = [];
let operations = [];
let temporalNumber = "";

// Select and save into variables whole buttons needed
const numberButtons = document.querySelectorAll('.buttons');
const outputField = document.getElementById('output');
const clearButton = document.getElementById('clear');

// Add click event for whole buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let digito = button.textContent;

        // If the clicked button is a number, accumulate it in temporalNumber
        if (!isNaN(digito) || digito === ".") {
            temporalNumber += digito;
            outputField.value += digito;
        } 
        // If the clicked button is an operation
        else if (digito === "+" || digito === "-" || digito === "*" || digito === "÷") {
            // Push the current temporalNumber to numbers array
            numbers.push(Number(temporalNumber));
            operations.push(digito);
            temporalNumber = "";  // Reset the temporalNumber for the next number
            outputField.value += digito;
        } 
        // If the clicked button is the equals sign
        else if (digito === "=") {
            numbers.push(Number(temporalNumber));  // Push the last number
            outputField.value = operate(numbers, operations);
            // Reset arrays for next operation
            numbers = [];
            operations = [];
            temporalNumber = outputField.value;  // Save the result in temporalNumber for further calculations
        }
    });
});

//Remove output content
clearButton.addEventListener('click', () => {
    outputField.value = "";
    numbers = [];
    operations = [];
    temporalNumber = "";
});

function operate(numbers, operations) {
    //Assign to this variable the first number of the array
    let resultadoFinal = numbers[0];
    // First I evaluate multiply and divide, then the others operations
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '*') {
            resultadoFinal = multiply(resultadoFinal, numbers[i + 1]);
            console.log("Primero la multi: ", resultadoFinal);            
        } else if (operations[i] === '÷') {
            resultadoFinal = divide(resultadoFinal, numbers[i + 1]);
            console.log("Segundo dividimos la suma: ", resultadoFinal);
        } else if (operations[i] === '+') {
            resultadoFinal = add(resultadoFinal, numbers[i + 1]);
            console.log("Tercero la suma: ", resultadoFinal);
        } else if (operations[i] === '-') {
            resultadoFinal = subtract(resultadoFinal, numbers[i + 1]);
            console.log("Cuarto la resta: ", resultadoFinal);
        }
    }
    return resultadoFinal;
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber !== 0) {
        return firstNumber / secondNumber;
    } else {
        alert("No se puede dividir por 0");
        return 0;
    }
}
