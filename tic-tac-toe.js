function start(){
  document.beurt = "X";
}

function volgende(invullingvak){
  invullingvak.innerText = document.beurt;
  veranderbeurt();
}

function veranderbeurt(){
if(document.beurt === "X"){
   document.beurt = "O";
}
else{
   document.beurt = "X";
   }
}




mouseResponseThreshold = 10;

friction = 0.85;

rotationForce = 0.0;

games = 'Games';

drawName(games);
bounceBubbles();
