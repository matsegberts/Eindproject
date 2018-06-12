function start(){
  document.beurt = "X";
}

function volgende(invullingvak){
  invullingvak.innerText = document.beurt;
  veranderbeurt();
}

function veranderbeurt(){
if(docment.beurt === "X"{
   docment.beurt = "O";
}
else{
   docment.beurt = "X";
   }
}
