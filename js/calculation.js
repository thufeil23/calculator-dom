document.addEventListener('DOMContentLoaded', function() {
    let result = 0;
    let operators = 0;
    const firstInput = document.getElementById("first_input");
    const secondInput = document.getElementById("second_input");
    const operatorsInput = document.getElementById('operators_input');
    const resultDisplay = document.getElementById("result");
  
    function calculateResult(operation, symbol) {
      operators = operation;
      operatorsInput.innerHTML = symbol;
      result = eval(firstInput.value + symbol + secondInput.value);
      resultDisplay.innerHTML = formatting(result);
    }

    function formatting(nStr) {
        nStr += '';
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
      }
  
    document.getElementById('plus').addEventListener('click', function() {
      calculateResult(1, '+');
    });
  
    document.getElementById('minus').addEventListener('click', function() {
      calculateResult(2, '-');
    });
  
    document.getElementById('multiply').addEventListener('click', function() {
      calculateResult(3, '*');
    });
  
    document.getElementById('divide').addEventListener('click', function() {
      calculateResult(4, '/');
    });
  
    document.getElementById('allclear').addEventListener('click', function() {
      operators = 5;
      operatorsInput.innerHTML = 'ac';
      result = 0;
      resultDisplay.innerHTML = result;
      firstInput.value = '';
      secondInput.value = '';
    });
  
    return result;
  });
  