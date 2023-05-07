document.addEventListener('DOMContentLoaded', function() {
    let result = 0;
    let operators = 0;
    const firstInput = document.getElementById("first_input");
    const secondInput = document.getElementById("second_input");
    const operatorsInput = document.getElementById('operators_input');
    const resultDisplay = document.getElementById("result");
  
    operators.forEach(function(operator) {
      operator.addEventListener('click', function() {
        let value1 = parseInt(firstInput.value);
        let value2 = parseInt(secondInput.value);
        let calculationResult;
  
        if (isNaN(value1) || isNaN(value2)) {
          alert("Please enter valid numbers.");
          return;
        }
  
        switch (operatorsInput) {
          case "+":
            calculationResult = value1 + value2;
            break;
          case "-":
            calculationResult = value1 - value2;
            break;
          case "x":
            calculationResult = value1 * value2;
            break;
          case "/":
            calculationResult = value1 / value2;
            break;
          default:
            alert("Invalid operator.");
            return;
        }
  
        resultDisplay.innerHTML = calculationResult;
      });
    });
  
    document.getElementById("allclear").addEventListener('click', function() {
      firstInput.value = '';
      secondInput.value = '';
      resultDisplay.innerHTML = '';
    });
  });
  