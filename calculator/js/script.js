function calculate() {
    // Retrieve input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    
    // Check if both inputs are numbers
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerHTML = 'Please enter valid numbers.';
      return;
    }
    
    // Perform calculation based on the selected operator
    var result;
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
        if (num2 === 0) {
          document.getElementById('result').innerHTML = 'Cannot divide by zero.';
          return;
        }
        result = num1 / num2;
        break;
      default:
        document.getElementById('result').innerHTML = 'Invalid operator selected.';
        return;
    }
    
    // Display the result
    document.getElementById('result').innerHTML = 'Result: ' + result;
  }