const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const creature = {x:5,y:5} 
let lx = 0;
let ly = 0;
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(canvasWidth/2 +lx ,canvasHeight/2+ly);

    
}

function draw(){

   lx++;


    drawCreature(creature.x, creature.y);

}


// replace this function with YOUR creature!
function drawCreature(x,y) {
    // fill(primaryColor);
    // stroke(secondaryColor);
    // circle(x, y, width);

    // noStroke();
    // fill('black');
    // textSize(16);
    // textAlign(CENTER);
    // text("Replace with your creature", x, y);

    	//Left Ear
  fill(255);
  ellipse(x, y, 40, 40);
  
  
  //Right Ear
  ellipse(x+100, y, 40, 40);
  
  //Head
  fill(255);
  ellipse(x+50, y+60, 150, 150);
  
  //Left Eyeball
  ellipse(x+25, y+40, 30, 30);
  
  //Left Iris
  fill(0);
  ellipse(x+25, y+44, 20, 20);
  
  //Right Eyeball
  fill(255);
  ellipse(x+80, y+40, 30, 30);
  
  //Right Iris
  fill(0);
  ellipse(x+80, y+44, 20, 20);
  
	//Nose
  ellipse(x+54, y+75, 40, 20);
  
  //Mouth
  fill(0);
  line(x+52, y+80, x+52, y+120);
}

function mouseClicked(){
    creature.x = mouseX;
    creature.y = mouseY;
}
