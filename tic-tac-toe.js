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
if(document.beurt === "X"){
   document.beurt = "O";
}
else{
   document.beurt = "X";
   }
  setMessage("Het is" + document.beurt +"'s beurt");
}

