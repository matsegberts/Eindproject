var paddle1;
var paddle2;

var p1V;
var p2V;

function setup(){
  createCanvas(600,400);
  
  paddle1 = height / 2 - 50;
  paddle2 = height / 2 - 50;
  
  p1V = 0;
  p2V = 0;
}

function draw(){
  background(51);
  
  rect(20,x,paddle1,10,200);
  rect(width-20,x,paddle2,10,200);
  
  paddle1 = constrain(paddle1, 0, height-100);
  paddle2 = constrain(paddle2, 0, height-100);
  
    function bestuting(){
      if(toetsIngedrukt(87)){
        p1V + 5;
      }
      else(toetsIngedrukt(83)){
        p1V - 5;
      }

      if(toetsIngedrukt(UP_ARROW)){
        p2V + 5;
      }
      else(toetsIngedrukt(DOWN_ARROW)){
        p2V - 5;
      } 
      p1V * 0,6;
      p2V * 0.5;
      p1 + p1V;
      p2 + p2V;
    }
  }
  
}
