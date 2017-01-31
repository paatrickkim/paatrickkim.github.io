function changeColor(){
  document.getElementById("intro").style.color="red"
  document.getElementById("content").style.color="white"
  document.getElementById("aboutme").style.color="white"
}

var operand1;
var operand2;

function getNumbers(){
  operand1 = Math.floor(Math.random() * 30) + 1;
  operand2 = Math.floor(Math.random() * 30) + 1;
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
  document.getElementById("userAnswer").value="";
}

function checkAnswer(){
  var sum = operand1 + operand2;
  var userSum = document.getElementById("userAnswer").value;
  
  if(sum == userSum){
    document.getElementById("results").innerHTML="You're so smart. Correct!"
  }
  else{
    document.getElementById("results").innerHTML="...incorrect. Check your work!"
  }
}