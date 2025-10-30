// function active onclick
function showSelection() {
  // declaring the function
  var s1 = document.getElementById("s1").value;
  var s2 = document.getElementById("s2").value;
  var s3 = document.getElementById("s3").value;
  var s4 = document.getElementById("s4").value;
  // create the message inside the function
  var message = `${s1} + ${s2} + ${s3} + ${s4}`;
  // display the span
  document.getElementById("spanTag").innerHTML = message;
}
