function rollDice(){
  
  var dice1= document.getElementById("dice1");
  var dice2= document.getElementById("dice2");
  var results= document.getElementById("results");
  var di1= Math.floor(Math.random() * 6) + 1;
  var di2= Math.floor(Math.random() * 6) + 1;
  var total=di1+di2;
  dice1.innerText=String(di1);
  dice2.innerText=String(di2);
  results.innerText=("Your roll was"+String(total)+".");
  if (di1==di2){results.innerText += "you rolled doubles";};

}