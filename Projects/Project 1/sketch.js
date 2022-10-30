const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const creature = {x:5,y:5,primary:'brown',secondary:"blue"} 
let lx = 0;
let ly = 0;
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(canvasWidth/2 +lx ,canvasHeight/2+ly);

    
}

function draw(){

   creature.x++;
   ly=ly+5;
   lx =10 +lx;

   if(lx>800){
    lx=-600;
   }

   if(ly>1400){
    ly=0;
   }

   clear();


   drawLandscapeObject(300,200);
    drawCreature(creature.x, creature.y);
    drawCreature(ly, 500);
    drawCreature(600-lx, 200);


    

}

function drawLandscapeObject(x,y){

    fill("yellow");
    ellipse(x,y,300,200);
    
    fill("blue");
    ellipse(x+400,y+150,300,200);

    fill("red");
    ellipse(x-50,y+300,300,200);

    fill("purple");
    ellipse(x+600,y-90,300,200);

    fill("green");
    ellipse(x+800,y+250,300,200);
    
}

function drawCreature(x,y) {


    	//Left Ear
  fill(creature.secondary);
  ellipse(x, y, 40, 40);
  
  
  //Right Ear
  ellipse(x+100, y, 40, 40);
  
  //Head
  fill(creature.primary);
  ellipse(x+50, y+60, 150, 150);
  
  //Left Eyeball
  fill(255);
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
