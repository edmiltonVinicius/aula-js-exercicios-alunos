/**
 * Crie uma página web que permita ao usuário verificar se um número digitado é par ou impar.
 * A página deve incluir:
 * - Um campo de entrada para o usuário inserir um número.
 * - Um botão que, ao ser clicado, verifica se o número é para ou impar.
 * - Uma área de texto onde a mensagem "O número é par." ou "O número é impar." Será
 * exibida, baseando-se no númeor inserido.
 * 
 * Utilize HTML para estruturar a página, CSS para estilizá-la, e Javascript para adicionar
 * a lógica de verificação do número e a manipulação do DOM para exibir a mensagem.
 */


document.addEventListener('DOMContentLoaded', function() {
    function checkNumber() {
        const inputValue = document.getElementById('numberInput').value;
        const result = document.getElementById('result');

        if (inputValue % 2 == 0) {
            result.textContent = "O número é par.";
        } else {
            result.textContent = "O número é ímpar.";
        }
    }

    document.getElementById('buttonCheckNumber').addEventListener('click', checkNumber)
})