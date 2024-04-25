/**
 * Faça um programa, com um método que necessite de três argumentos:
 *  dois números e um sinal de operador matemático (+, -, * ou /)
 * 
 * Ele deve fazer o cálculo indicado pelo operador usando os dois números passsados.
 * Retorne e salve o resultado em uma nova variável e exiba o resultado
 */

document.addEventListener('DOMContentLoaded', function() {
    function calculate(num1, num2, operator) {
        let result;
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if(num2 !== 0) {
                    result = num1 / num2;
                } else {
                    console.log("Error: Division by zero is not allowed.");
                }
                break;
            default:
                console.log("Error: Invalid operator.");
        }
        console.log(`The result is ${result}`);
    }

    const num1 = prompt("Enter the first number: ");
    const num2 = prompt("Enter the second number: ");
    const operator = prompt("Enter the operator: ");

    calculate(+num1, +num2, operator);
});