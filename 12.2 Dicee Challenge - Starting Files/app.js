var randomNumber1 = Math.floor(Math.random()*6) + 1;
var diceImage = "./images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , diceImage);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var diceImage2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , diceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins😎!!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins😎!!";
}
else{
    document.querySelector("h1").innerHTML = "Draw🤝";
}

