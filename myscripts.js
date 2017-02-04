//this is a random comment, take note.

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

var pics = [
  "https://kidskonnect.com/assets/uploads/2014/12/birds-featured.jpg",
  "http://weknowyourdreams.com/images/bird/bird-02.jpg",
  "https://s-media-cache-ak0.pinimg.com/564x/90/c9/82/90c982d2b8118104dc2063373d825627.jpg"
];

var picIndex = 0;

function goLeft(){
  if(picIndex > 0){
    picIndex = picIndex - 1;
    document.getElementById("pic").src=pics[picIndex];
  }
}

function goRight(){
    if(picIndex < (pic.length - 1)){
    picIndex = picIndex + 1;
    document.getElementById("pic").src=pics[picIndex];
  }
}

