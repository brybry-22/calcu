document
  .getElementById("calculator-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get input values
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    // Perform calculation based on selected operation
    let result;
    switch (operator) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          result = "Cannot divide by zero";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Select a valid operation";
    }

    // Display the result
    document.getElementById("result").innerText = `Result: ${result}`;
  });