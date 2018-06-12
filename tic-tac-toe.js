function start(){
  document.beurt = "X";
  setMessage(document.turn + " mag beginnen.");
}

function setMessage(msg){
  document.getElementById("message").innerText = msg;
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

