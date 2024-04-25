/**
 * Faça um programa que tenha um método chamado calcularArea(), que receba as dimensões de
 * um terreno retangular como argumento (largura e comprimento) e mostre a área do terreno
 * no console
 */

document.addEventListener("DOMContentLoaded", function () {
  function calculateArea(width, length) {
    let area = width * length;
    console.log(`A área do terreno é ${area}`);
  }

  calculateArea(5, 10);
});
