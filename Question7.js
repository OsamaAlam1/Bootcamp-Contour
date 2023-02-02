function addNumbers() {
    try {
      var num1 = parseInt(document.getElementById("input1").value);
      var num2 = parseInt(document.getElementById("input2").value);
      if (isNaN(num1) || isNaN(num2)) {
        throw "Input must be a number";
      }
      var result = num1 + num2;
      alert("Result: " + result);
    } catch (err) {
      alert("Error: " + err);
    }
  }
  