var randomNumber1 = Math.floor(Math.random() * 6)+1; //generates a random randomNumber1

var randomDiceImage = "dice"+ randomNumber1 + ".png";

var imageRandom = "images/"+ randomDiceImage;

var img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src",imageRandom);

var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomImageSrc = "images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
  else if (randomNumber2>randomNumber1) {
      document.querySelector("h1").innerHTML="Player 2 wins";
  }
  else{
      document.querySelector("h1").innerHTML="draw";
  }
