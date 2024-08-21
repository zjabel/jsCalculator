document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones de números y el campo de entrada
    const numberButtons = document.querySelectorAll('.buttons');
    const operationButtons=document.querySelectorAll('.operations-buttons');
    const inputField = document.getElementById('text-input');

    // Añade un evento de clic a cada botón de número
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Añade el número del botón al valor actual del campo de entrada
            inputField.value += button.textContent+" ";
        });
    });
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Añade el número del botón al valor actual del campo de entrada
            inputField.value += button.textContent+" ";
        });
    });
});

let firstNumber = 0;
let operation = "";
let secondNumber = 0;

function operate(firstNumber, operation, secondNumber) {

}
function add(numbers) {
    // Extrae los valores del objeto kwargs
    const values = Object.values(numbers);

    // Suma todos los valores
    const sum = values.reduce((total, current) => total + current, 0);

    return sum;
}