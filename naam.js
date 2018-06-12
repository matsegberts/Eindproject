mouseResponseThreshold = 10;

friction = 0.85;

rotationForce = 0.0;

games = 'Games';

drawName(games);
bounceBubbles();

function setMessage(msg){
  document.getElementById("games").innerText = msg;
}
