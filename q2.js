function checkValue() {
  var value1 = Number(document.getElementById("input1").value);
  var value2 = Number(document.getElementById("input2").value);
  var operation = document.getElementById("operationSelected").value;

  if (operation == "add") {
    result = value1 + value2;
  } else if (operation == "subtract") {
    result = value1 - value2;
  } else if (operation == "times") {
    result = value1 * value2;
  } else if (operation == "divide") {
    result = value1 / value2;
  }
  var userAnswer = document.getElementById("answer").value;

  if (userAnswer == result) {
    document.getElementById("label").innerHTML = "correct";
  } else {
    document.getElementById("label").innerHTML = "incorrect";
  }
}
