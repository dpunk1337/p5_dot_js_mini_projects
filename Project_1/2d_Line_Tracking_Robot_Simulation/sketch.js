var x=300, y=100;
var ang, angle=0;
var d;
var R, L;
var factor=2;
var a1,b1,a2,b2;


function setup() {
  createCanvas(600, 600);
  ang = atan(10 / 41);
  d = sqrt(1781);
}

function draw() {
  createTrack();
  setBuggy();
  checkCol();
  if (L[0] > 120 && R[0] > 120) {
    forward();
  }
  else if (L[0] < 120 && R[0] > 120) {
    translate(x, y);
    rotate(angle);
    angle -= 0.08;
    translate(-x, -y);
  x += 0.07*cos(angle+PI);
  y+=0.07*sin(angle+PI);
  }
  else if (R[0] < 120 && L[0] > 120) {
    translate(x, y);
    rotate(angle);
    angle += 0.08;
    translate(-x, -y);
    x += 0.07*cos(angle+PI);
    y+=0.07*sin(angle+PI);
  }
  else
  {
    forward();
  }
  

  createBuggy();

}

function createTrack() {
  background(255, 255, 0);
  strokeWeight(10);
  stroke(0);
  noFill();
  arc(125, 300, 150, 150, PI / 2, -PI / 2);
  arc(475, 300, 150, 150, -PI / 2, PI / 2);
  line(125, 225, 475, 225);
  line(125, 375, 475, 375);
  arc(125, 355, 40, 40, 0, PI / 2);
  arc(475, 355, 40, 40, PI / 2, PI);
  arc(185, 355, 80, 60, PI, -PI / 2);
  arc(415, 355, 80, 60, -PI / 2, 0);
  line(185, 325, 415, 325);
  line(300, 305, 300, 345);
  line(213, 305, 213, 345);
  line(387, 305, 387, 345);
}

function setBuggy() {
  if (mouseIsPressed) {
    x = mouseX;
    y = mouseY;
    angle=0;
  }
}

function checkCol() {
  L=get(0,0);
  R=get(0,0);
  a1=d * cos(-ang + angle+ PI) + x;
  b1=d * sin(-ang + angle+ PI) + y;
  a2=d * cos(ang + angle+ PI) + x;
  b2=d * sin(ang + angle+ PI) + y;
  
  //print('ang',ang);
  //print('angle',angle);
  //print('a1=',a1);
  //print('a2=',a2);
  //print('b1=',b1);
  //print('b2=',b2);
  L = get(d * cos(-ang + angle+ PI) + x, d * sin(-ang + angle+ PI) + y);
  //rect(d * cos(-ang + angle+ PI) + x, d * sin(-ang + angle+ PI) + y,5,5);
  //print(L);
  R = get(d * cos(ang + angle+ PI) + x, d * sin(ang + angle+ PI) + y);
  //rect(d * cos(ang + angle+ PI) + x, d * sin(ang + angle+ PI) + y,5,5);
  //print("L",L);
  //print("R",R);
}

function forward() {
  translate(x,y);
  rotate(angle);
  translate(-x,-y);
  x += 1*cos(angle+PI);
  y+=1*sin(angle+PI);
}

function createBuggy() {
  fill(0, 0, 255);
  noStroke();
  rect(x - 30, y - 20, 60, 40);

  stroke(255, 0, 255);
  strokeWeight(5);
  line(x - 30, y - 10, x - 40, y - 10);
  line(x - 30, y + 10, x - 40, y + 10);
}