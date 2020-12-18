var puck;
var left;
var right;
var paddleX;
var moveDist=10;
var leftScore=0;
var rightScore=0;
var winScore=5;
var hei=400;



function setup() {
  createCanvas(hei*1.5, hei);
  paddleX=width/60;
  
  puck=new Puck();
  left=new Paddle(paddleX);
  right=new Paddle(width-paddleX);
}

function draw() {
  background(0);
  puck.checkPaddle(left);
  puck.checkPaddle(right);
  puck.show();
  puck.update();
  left.show();
  right.show();
  left.update();
  right.update();
  showScore();
  declareWinner();
  

  

  

}

function keyReleased()
{
left.move(0);
right.move(0);
}

function keyPressed()
{
switch(keyCode)
{
  case 87:left.move(-moveDist);break;
  case 83:left.move(moveDist);break;
  case UP_ARROW: right.move(-moveDist);break;
  case DOWN_ARROW: right.move(moveDist);

}

}

function showScore()
{
  fill(255);
  textAlign(CENTER);
  textSize(height/20);
  text(leftScore,left.x+height/20,height/20);
  text(rightScore,right.x-height/20,height/20);

}

function declareWinner()
{

  if(leftScore==winScore)
  {
    noLoop();
    textSize(height/5);
    textAlign(CENTER);
    text('Player 1 wins',width/2,height/2+height/17);
  }
    if(rightScore==winScore)
  {
    noLoop();
    textSize(height/5);
    textAlign(CENTER);
    text('Player 2 wins',width/2,height/2+height/17);
  }

}