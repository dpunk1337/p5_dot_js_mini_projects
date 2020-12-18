class Paddle{
 constructor(_x){
  this.score=0;
 this.x=_x;
 this.y=height/2;
 this.h=height/3.5;
 this.w=width/50;
  this.v=0;
  this.speed=0;
  if(this.x>width/2)
  {
  this.dir=1;
  }
  else
  {
  this.dir=-1;
  }
  
 }
  
  
  show(){
  fill(255);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
  }
  
  update()
  {
  this.y+=this.speed;
  this.y=constrain(this.y,this.h/2,height-this.h/2);
  }
  
  move(_speed){
  this.speed=_speed;  
  }
  
 }
  
