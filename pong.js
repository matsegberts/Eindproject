var paddle1;
var paddle2;


function setup(){
  createCanvas(600,400);
  paddle1 = createVerctor(0,0);
  paddle2 = createVerctor(0,0);
}

function draw(){
  background(51);
  
  rect(20,x,paddle1,10,200);
  rect(width-20,x,paddle2,10,200);
  
  paddle1 = constrain(paddle1, 0, height-100);
  paddle2 = constrain(paddle2, 0, height-100);
}
