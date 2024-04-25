/**
 * Crie uma página web que permita ao usuário inserir seu ano de nascimento e, ao clicar
 * em um botão, informe se ele é maior ou menor de idade (considerando a maioridade de 18 anos).
 * A página deve incluir:
 * - Um campo de entrada para o usuário digitar o ano de nasciment
 * - Um botão que, ao ser clicado, verifica a idade do usuário.
 * - Uma área de texto onde será exibida a mensagem "Você é maior de idade." ou "Você é menor de idade."
 * baseando-se na idade calculada.
 * 
 * Utilize HTML para estruturar a página e Javascript para realizar o cálculo da idade e manipular o DOM
 * para exibir a mensagem correspondente.
 */

document.addEventListener('DOMContentLoaded', function() {

    function checkAge() {
        const birthYear = document.getElementById('yearInput').value;
        const result = document.getElementById('result');

        const currentYear = new Date().getFullYear();

        // 1995
        // 2024
        /// 2024-1995 = 29

        currentYear - birthYear >= 18 ?
            result.textContent = "Você é maior de idade."
            :
            result.textContent = "Você é menor de idade."

        // if (currentYear - birthYear >= 18) {
        //     result.textContent = "Você é maior de idade.";
        // } else {
        //     result.textContent = "Você é menor de idade.";
        // }
    }

    document.getElementById('buttonCheckAge').addEventListener('click', function() {
        checkAge()
    })
});