  //changing img1
  var rnd = Math.floor(Math.random() *6) + 1;   
  var rndDiceImg = "dice" + rnd + ".png";
  var rndImgSrc = "images/" + rndDiceImg;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", rndImgSrc);

  //changing img1
  var rnd2 = Math.floor(Math.random() *6) + 1;
  var rndDiceImg2 = "dice" + rnd2 + ".png";
  var rndImgSrc2 = "images/" + rndDiceImg2;
  var image2 = document.querySelectorAll("img")[1];  
  image2.setAttribute("src", rndImgSrc2);
  
if(rnd>rnd2){
    document.querySelector("h1").innerHTML = "🏁Player1 Wins";
  }
  else if(rnd<rnd2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🏁";
}
    else if(rnd=rnd2){
        document.querySelector("h1").innerHTML = "Its A Draw!!!";
    }
    
        