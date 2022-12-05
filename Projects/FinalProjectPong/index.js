const board = 600;
  let score = [0, 0];
  let ball = { x: 250, y: 100, vx: 2, vy: 2 };
  let play1 = { x: 30, y: 250, height: 100, width: 20 };
  let play2 = { x: board+660 - 50, y: 250, height: 100, width: 20 };
  
  function setup() { 
    frameRate(100);
    createCanvas(board+660, board);
  }

  //countdown (i could not figure out how to emplot the counter properly, I kept decreasing indefinitely)
  let count = 5;
  for(i=0;i<5;i++){
      text("Countdown"+count,520,300);
      count = count - 1;
      sleep(1000);
  }


  function drawCircle(xPos, yPos, radius){
    fill("white");
    circle(xPos,yPos,radius);
  }

  function draw() {
     
	//Creates Board
    fill("black");
    rect(0, 0, board+660, board);
    
   	//Creates Centerline
	fill("white");
    let h = 0;
    for (i=0;i<29;i++){
	    rect(620, 20+h, 10, 10);
        h=h+20;
    }

	//Creates Score
    textSize(40);
    text(score[0], 300, 100);
	text(score[1], 300+600, 100);
    // Draw ball
    fill("white");
    ellipse(ball.x, ball.y, 10, 10); 
    // Draw paddles
    fill("white");
    rect(play1.x, play1.y, play1.width, play1.height);
    rect(play2.x, play2.y, play2.width, play2.height);

//     //Draw obstacles (I really dont understand why I can't employ this strategy the obstacles wont even appear. I thinl that there is an underlying issues)
//     for(n=0; n<5; n++)
//    {
//       let xPos       =  Math.random()*(board+660);
//       let yPos       =  Math.random()*board;
//       let radius     =  minRadius+Math.random()*(400);
//       drawCircle(xPos, yPos, radius);
//    }
 
    
    if (ball.y > board - 10 || ball.y < 10) { // Bounce off top and bottom
      ball.vy *= -1;
    }
    
    if ( // Paddle #1 Collision Detection
      ball.x < play1.x + play1.width + 10 &&
      ball.y > play1.y &&
      ball.y < play1.y + play1.height
    ) {
      ball.vx *= -1.1; // bounce and increase velocity 
      ball.vy = random(8) - 4; // Random y velocity between -4 and 4
    }
    
    if ( // Paddle #2 Collision Dection
      ball.x > play2.x - 10 && // If it
      ball.y > play2.y &&
      ball.y < play2.y + play2.height
    ) {
      ball.vx *= -1.2; // Invert and increase velocity by 10%
      ball.vy = random(8) - 4; // Random y velocity between -4 and 4
    }
    
    // Move Paddles
    if (keyIsDown(87) && play1.y > 5) { // W is pressed
      play1.y -= 8;
    }
    if (keyIsDown(83) && play1.y < board - play1.height) { // S is pressed
      play1.y += 8;
    }
    if (keyIsDown(UP_ARROW) && play2.y > 5) {
      play2.y -= 8;
    }
    if (keyIsDown(DOWN_ARROW) && play2.y < board - play1.height) {
      play2.y += 8;
    }
    
    // Update score
    if (ball.x < 0) {
      score[1] += 1;
      ball = { x: 700, y: 400, vx: 2, vy: 2 };
    }
    if (ball.x > board+660) {
      score[0] += 1;
      ball = { x: 700, y: 400, vx: -2, vy: 2 };
    }

    //Checks if game is over
    if (score[1]==5 || score[0]==5){

        score[1]=0;
        score[0]=0;

        fill("black");
        rect(0, 0, board+660, board); 

        fill("white");
        textSize(40);
        text("YOU WIN!", 520, 300);
        delay(5000);
    }
  
    // Move the ball
    ball.x += ball.vx;
    ball.y += ball.vy;
    
  }

  // reference1: https://www.w3schools.com/graphics/game_obstacles.asp
  // reference2: https://dev.to/codesphere/can-we-make-pong-in-less-than-a-100-lines-of-javascript-3ah1
  
  //paragraph: Pong is such a rudimentary game that has been out for so long that if someone is to attempt to just make a simple functioning game
  //            without adding bells and whistles, there will likely be an exact iteration made by someone before. OF course, if I were to try to make
  //            something new and innovative outside of basic pong, it would likely be an original work. As a side note, I hope that you can see that I attempted 
  //            the obstacles and the countdown. I could nto find resources that properly explained how to do it and also with the obstacles the circles wouldn't even apear before trying to get collision physics. I suspect that there is a separate issue  