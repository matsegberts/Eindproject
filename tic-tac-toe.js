function start(){
  document.beurt = "X";
  setMessage(document.beurt + " mag beginnen.");
}

function setMessage(msg){
  document.getElementById("message").innerText = msg;
}

function volgende(invullingvak){
  if(invullingvak.innerText === ""){
    invullingvak.innerText = document.beurt;
    veranderbeurt();
  } 
  else{
  }
}

function veranderbeurt(){
  if(winnaar(document.beurt)){
    setMessage(document.beurt + " heeft gewonnen!");
  }
  else{
    if(document.beurt === "X"){
       document.beurt = "O";
    }
    else{
       document.beurt = "X";
       }
      setMessage("Het is" + document.beurt +"'s beurt");
  }
}

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

function rijen(a, b, c, move){
  var result = false;
  if(drieOpEenRij(a) === move && drieOpEenRij(b) === move && drieOpEenRij(c) === move){
    result = true;
  }
  return result;
}

function drieOpEenRij(vlaknummer){
  return document.getElementById("vlakje" + vlaknummer).innerText;
  
}
