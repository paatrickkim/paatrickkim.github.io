//this is a random comment, take note.

/**
  To handle the home page button
**/

function changeColor(){
  if(document.getElementById("intro").style.color == "blue"){
    document.getElementById("intro").style.color="black";
  }
  else{
    document.getElementById("intro").style.color="blue";
  }
}

/**
  To handle the gallery 
**/

var pics = [
  "https://kidskonnect.com/assets/uploads/2014/12/birds-featured.jpg",
  "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/16388100_239684416484368_3402041391103320294_n.jpg?oh=c457dc53b23110ec3c9ec652ef4c632b&oe=590838DA",
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
    if(picIndex < (pics.length - 1)){
    picIndex = picIndex + 1;
    document.getElementById("pic").src=pics[picIndex];
  }
}


/**
  To handle flashcards
**/

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
    document.getElementById("results").innerHTML="Good Job! You Are Correct.";
  }
  else{
    document.getElementById("results").innerHTML="Incorrect. Check Your Work!";
  }
}

/**
  To handle Tic Tac Toe
**/

var character = "";

function chooseX(){
  character = 'X';
}

function chooseO(){
  character = 'O';
}

function makeMove(divLocation){
  var insideDiv = document.getElementById(divLocation).innerHTML;
  
  if(insideDiv === ""){
    document.getElementById(divLocation).innerHTML=character;
    document.getElementById("notes").innerHTML="<p>Keep Playing.</p>";
  }
  
  else{
    document.getElementById("notes").innerHTML="<p>Already made a move here</p>" +
      "<p> Try another spot! </p>";
  }
  
  if(checkWinner()){
    document.getElementById("notes").innerHTML= "<p>Congratulations, " + character + "!" + " You win!</p>";
  }
}

function checkWinner(){
  var r1c1 = document.getElementById("row1col1").innerHTML;
  var r1c2 = document.getElementById("row1col2").innerHTML;
  var r1c3 = document.getElementById("row1col3").innerHTML;
  var r2c1 = document.getElementById("row2col1").innerHTML;
  var r2c2 = document.getElementById("row2col2").innerHTML;
  var r2c3 = document.getElementById("row2col3").innerHTML;
  var r3c1 = document.getElementById("row3col1").innerHTML;
  var r3c2 = document.getElementById("row3col2").innerHTML;
  var r3c3 = document.getElementById("row3col3").innerHTML; 
  
  if(r1c1 == r1c2 && r1c1 == r1c3 && r1c1 !== "" ||
     r2c1 == r2c2 && r2c1 == r2c3 && r2c1 !== "" ||
     r3c1 == r3c2 && r3c1 == r3c3 && r3c1 !== "" ||
     r1c1 == r2c1 && r1c1 == r3c1 && r1c1 !== "" ||
     r2c2 == r1c2 && r2c2 == r3c2 && r2c2 !== "" ||
     r3c3 == r2c3 && r3c3 == r1c3 && r3c3 !== "" ||
     r1c1 == r2c2 && r1c1 == r3c3 && r3c3 !== "" ||
     r2c2 == r1c3 && r2c2 == r3c1 && r2c2 !== ""){
     return true;
  }
  else{
    return false;
  }
}
