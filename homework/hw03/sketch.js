function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    // drawCreature('pink','hotpink')


    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

function drawCreature(creatureX,creatureY,size,color1,color2) {
    strokeWeight(size/50)
    fill(color1);
    circle(creatureX,creatureY,size);
    fill('black');
    circle(creatureX-size/4,creatureY-size/4,size/5);
    circle(creatureX+size/4,creatureY-size/4,size/5);
    fill(color2);
    circle(creatureX-size/3,creatureY+.5*size,size/3);
    circle(creatureX+size/3,creatureY+.5*size,size/3);
}