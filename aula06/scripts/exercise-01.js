/**
 *  Faça uma função com o nome "msgErro" que, quando chamda, exibe a seguinte mensagem na tela:
 *      "Essa é uma mensagem padronizada de erro. Cuidado com o que está fazendo!!"
 */

// QUANDO O HTML FOR CARREGADOR EXECUTA A FUNÇÃO
document.addEventListener("DOMContentLoaded", function () {
  function messageError() {
    // opção 01
    // alert("Essa é uma mensagem padronizada de erro. Cuidado com o que está fazendo!!");

    //opção 02
    const divError = document.getElementById("messageError");
    divError.textContent =
      "Essa é uma mensagem padronizada de erro. Cuidado com o que está fazendo!!";
  }

  const buttonConfirm = document.getElementById("buttonConfirm");

  buttonConfirm.addEventListener("click", function () {
    messageError();
  });
});
