// functie voor de variabele om opnieuw te gaan
function start(){
  
  for(var i =1; i<=9; i++){
    opnieuw(i)
  }
  
  document.beurt = "X";
  document.win = null;
  setMessage(document.beurt + " mag beginnen.");
}

function setMessage(msg){
  document.getElementById("message").innerText = msg;
}

//als het vakje leeg is plaats 
function volgende(invullingvak){
  if(document.win != null) {
  }
  else{
    if(invullingvak.innerText === ""){
      invullingvak.innerText = document.beurt;
      veranderbeurt();
    } 
    else{
    }
  }
}

//geeft weer wie gewonnen heeft en zo lang niemand heeft gewonnen verander de beurt 
function veranderbeurt(){
  if(winnaar(document.beurt)){
    setMessage(document.beurt + " heeft gewonnen!");
    document.win = document.beurt;
  }
  else{
    if(document.beurt === "X"){
       document.beurt = "O";
    }
    else{
       document.beurt = "X";
       }
      setMessage("Het is " + document.beurt +"'s beurt");
  }
}

//de eisen voor de rijen als iemand wint
function winnaar(move){
  var result = false;
  if(rijen(1, 2, 3, move)||
     rijen(4, 5, 6, move)||
     rijen(7, 8, 9, move)||
     rijen(1, 4, 7, move)||
     rijen(2, 5, 8, move)||
     rijen(3, 6, 9, move)||
     rijen(1, 5, 9, move)||
     rijen(3, 5, 7, move)) {
      result = true;
  }
  return result;
}

// kijkt of er iemand gewonnen heeft
function rijen(a, b, c, move){
  var result = false;
  if(drieOpEenRij(a) === move && drieOpEenRij(b) === move && drieOpEenRij(c) === move){
    result = true;
  }
  return result;
}

//roept een van de vlakjes op
function drieOpEenRij(vlaknummer){
  return document.getElementById("vlakje" + vlaknummer).innerText;
  
}

// maakt alle vlakjes weer leeg
function opnieuw(vlaknummer){
  document.getElementById("vlakje" + vlaknummer).innerText = ""; 
}


