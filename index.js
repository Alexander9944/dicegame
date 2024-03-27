var randomNumber =Math.floor(Math.random() * 6)+1;
if (randomNumber==1){
    document.querySelector(".img1").setAttribute("src","./dice1.png");

}else if (randomNumber==2){
    document.querySelector(".img1").setAttribute("src","./dice2.png");
}else if (randomNumber==3){
    document.querySelector(".img1").setAttribute("src","./dice3.png");
}else if (randomNumber==4){
    document.querySelector(".img1").setAttribute("src","./dice4.png");
}else if (randomNumber==5){
    document.querySelector(".img1").setAttribute("src","./dice5.png");
}else  {
    document.querySelector(".img1").setAttribute("src","./dice6.png");
}
var randomNumber1 =Math.floor(Math.random() * 6)+1;
if (randomNumber1==1){
    document.querySelector(".img2").setAttribute("src","./dice1.png");

}else if (randomNumber1==2){
    document.querySelector(".img2").setAttribute("src","./dice2.png");
}else if (randomNumber1==3){
    document.querySelector(".img2").setAttribute("src","./dice3.png");
}else if (randomNumber1==4){
    document.querySelector(".img2").setAttribute("src","./dice4.png");
}else if (randomNumber1==5){
    document.querySelector(".img2").setAttribute("src","./dice5.png");
}else  {
    document.querySelector(".img2").setAttribute("src","./dice6.png");
}
if (randomNumber>randomNumber1){
    document.querySelector("h2").innerHTML = "Player 1 wins";
    
}else if (randomNumber==randomNumber1){
    document.querySelector("h2").innerHTML = "Draw";
}else {
    document.querySelector("h2").innerHTML = "Alex Wins";
}









