var numOne = document.getElementById("num_one");
var numTwo = document.getElementById("num_two");
var calculateBtn= document.getElementById("calculateBtn");
var ans= document.getElementById("answer");
function add(){
  var inputOne= Number(numOne.value);
  var inputTwo= Number(numTwo.value);
  var sum= inputOne + inputTwo;
  answer.innerHTML = sum.toString();
}
calculateBtn.addEventListener("click", add);
