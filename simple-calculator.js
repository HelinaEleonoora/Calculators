(function (document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const in1 = document.querySelector("#number1");
    const in2 = document.querySelector("#number2");
    const out = document.querySelector("output");

    const buttons = document.querySelectorAll('button');

    for (let button of buttons) {
      button.addEventListener('click', function () {
        let nr1 = Number(in1.value);
        let nr2 = Number(in2.value);
        let op  = this.getAttribute('id');
        out.innerText = calculate(nr1, nr2, op);
      });
    }

    function calculate(a, b, operation) {
      let result = null;
      switch (operation) {
        case 'add':
          result = `Add: ${a + b}`;
          break;
        case 'subtract':
          result = `Subtract: ${a - b}`;
          break;
        case 'multiply':
          result = `Multiply: ${a * b}`;
          break;
        case 'divide':
          if (b == 0) {
            result = 'Divison by 0 is not allowed!';
          } else {
            result = `Divide: ${a / b}`;
          }
          break;
        case 'modulo':
          if (b == 0) {
            result = 'Modulo by 0 is not allowed!';
          } else {
            result = `Modulo: ${a % b}`;
          }
          break;
        case 'clear':
          in1.value = in2.value = '';
          // result = `cleared!`;
      }
      return result;
    }
  })

}(document));
