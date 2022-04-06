var dices = Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");

function randNum() {
  var randomNum = Math.floor(Math.random() * dices.length);
  return randomNum;
}

var num1 = randNum()
var num2 = randNum()

document.querySelector(".img1").setAttribute("src", dices[num1]);
document.querySelector(".img2").setAttribute("src", dices[num2]);

if (num1 > num2){
  document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (num1 < num2){
  document.querySelector("h1").innerHTML= "Player 2 wins!"
}
else{
  document.querySelector("h1").innerHTML= "It's a draw!"
}





// function randImg1() {
//      var randomNum = Math.floor(Math.random() * dices.length);
//      document.querySelector(".img1").setAttribute("src", dices[randomNum]);
// }
//
// function randImg2() {
//      var randomNum = Math.floor(Math.random() * dices.length);
//      document.querySelector(".img2").setAttribute("src", dices[randomNum]);
// }
//
// randImg1()
// randImg2()
// "images/dice"+randomNum+".png"
