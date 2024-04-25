/**
 * Faça um método que receba como parâmentro a idade de uma pesssoa.
 * A função deve retornar a string se o voto da pessoa é:
 *
 * - Obrigatório
 * - Facultativo
 * - Não pode votar
 *
 */

document.addEventListener("DOMContentLoaded", function () {

  function saberSePodeVotar(idade) {

    if (idade < 16) {
      return "Não pode votar";
    } 

    if (idade >= 18 && idade <= 70) {
      return "Obrigatório";
    } 
    
    return "Facultativo";
  

    // if (idade < 16) {
    //   return "Não pode votar";
    // } else if (idade >= 18 && idade <= 70) {
    //   return "Obrigatório";
    // } else {
    //   return "Facultativo";
    // }
  }

  console.log(saberSePodeVotar(89));
});
