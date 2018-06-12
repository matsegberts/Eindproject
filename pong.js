var paddle1;
var paddle2;

var p1V;
var p2V;

var bal;
var balV;

function setup(){
  createCanvas(600,400);
  
  paddle1 = height / 2 - 50;
  paddle2 = height / 2 - 50;
  
  p1V = 0;
  p2V = 0;
  
  bal = createVector(widht / 2 , height /2);
  balV = createVector(random(4), random(4));
}

function draw(){
  background(51);
  
  rect(20,x,paddle1,10,200);
  rect(width-20,x,paddle2,10,200);
  
  ellipse(bal.x,bal.y.20);
  
  paddle1 = constrain(paddle1, 0, height-100);
  paddle2 = constrain(paddle2, 0, height-100); 
  
  besturing();
  
  besturingbal();
}

function besturingbal(){
  
  bal.x + balV.x;
  bal.y + balV.y;
  
  if (bal.y > height || bal.y < 0){
    balV.y * -1;
  }
  if (bal.x <= 30 ){
    if(bal.y > p1 && bal.y < p1 + 100){
    balV.x * -1;
      console.log("p1");
    }
      
  } 
  else (bal.x > width - 30){
    if(bal.y > p2 && bal.y < p2 + 100){
      balV.x * -1;
        console.log("p2");
  }
  
  bal.x + balV.x;
  bal.y + balV.y;
}
 
function bestuting(){
  if(toetsIngedrukt(87)){
    p1V - 5;
  }
  else(toetsIngedrukt(83)){
    p1V + 5;
  }

  if(toetsIngedrukt(UP_ARROW)){
    p2V - 5;
  }
  else(toetsIngedrukt(DOWN_ARROW)){
    p2V  5;
  } 
  p1V * 0,6;
  p2V * 0.6;
  p1 + p1V;
  p2 + p2V;
    }
}
