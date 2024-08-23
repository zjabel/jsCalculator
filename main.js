document.addEventListener('DOMContentLoaded', () => {
    let numbers = [];
    let operations = [];
    // Selecciona todos los botones de números y el campo de entrada
    const numberButtons = document.querySelectorAll('.buttons');
    const outputField = document.getElementById('output');
    const clearButton = document.getElementById('clear');

    // Add click event for whole buttons
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            let digito = button.textContent;
            let temporalNumber = "";
            // Add the button clicked content to the output
            outputField.value += button.textContent + "";
            if (button.textContent != "+" && button.textContent != "-" && button.textContent != "*" && button.textContent != "÷") {
                temporalNumber += Number(digito);
            } else if (button.textContent == "=") {
                outputField.value = operate(numbers, operations);

            }
            else {
                operations.push(digito);
                numbers.push(temporalNumber);

                //Reset value of this variable
                temporalNumber = "";
            }

        });
    });
    //Remove output content
    clearButton.addEventListener('click', () => {
        outputField.value = "";
    })
});
function operate(numbers, operations) {
    // Prioridad de multiplicación y división
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '*' || operations[i] === '÷') {
            let resultado = operacion(numbers[i], numbers[i + 1], operations[i]);
            // Reemplaza los dos números usados con el resultado
            numbers.splice(i, 2, resultado);
            // Elimina la operación usada
            operations.splice(i, 1);
            i--;  // Retrocede el índice para procesar la nueva operación en esa posición
        }
    }

    // Luego, suma y resta
    let resultadoFinal = numbers[0];
    for (let i = 0; i < operations.length; i++) {
        resultadoFinal = operacion(resultadoFinal, numbers[i + 1], operations[i]);
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
    if (firstNumber !== 0) {
        return firstNumber / secondNumber;
    } else {
        alert("No se puede dividir por 0")
    }
}