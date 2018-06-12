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

