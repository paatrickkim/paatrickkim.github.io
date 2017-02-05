
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