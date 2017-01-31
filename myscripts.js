function changeColor(){
  if(document.getElementById("intro").style.color == "blue"){
    document.getElementById("intro").style.color="black";
  }
  else{
    document.getElementById("intro").style.color="blue";
  }
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
    document.getElementById("results").innerHTML="Good Job! You Are Correct."
  }
  else{
    document.getElementById("results").innerHTML="Incorrect. Check Your Work!"
  }
}