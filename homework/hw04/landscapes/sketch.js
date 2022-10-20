const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    // // picks a random number between 0 and 100:
    // let rando = Math.random() * 100;
    // console.log(rando);
    
    // // picks a random number between 10 and 500:
    // rando = Math.random() * 490 + 10;
    // console.log(rando);
    
    // loops drawing 1000 stars of varying size
    for (let i=0; i < 1000; i++){

        x = Math.random()*canvasWidth;
        y = Math.random()*canvasHeight;
        z = Math.random()*3;

        strokeWeight(0);
        fill('white');
        circle(x, y, z);
    }z
    
   
}

function drawStars() {
    strokeWeight(0);
    fill('white');
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
    }
}

function draw(){
//attempted the extra credit here
    strokeWeight(0);
    // let i ;
    // if (i==0){
    //     fill('black');
    
    //     i = 1;
    // }
    // else{
    //     fill('white');
    // }


   
    fill("white");
    circle(canvasWidth/2, canvasHeight/2, 8);
    circle(canvasWidth/2+120, canvasHeight/2-20, 8);
    circle(canvasWidth/2+60, canvasHeight/2+40, 8);
    circle(canvasWidth/2+85, canvasHeight/2-60, 8);
    circle(canvasWidth/2+200, canvasHeight/2-50, 8);
    circle(canvasWidth/2+300, canvasHeight/2-50, 8);
    circle(canvasWidth/2+400, canvasHeight/2-40, 8 );

}

function drawBubbles() {
    strokeWeight(1);
    stroke('white');
    noFill()
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 40 + 5;
        circle(x, y, width);
    }
}
