class Puck{
constructor()
{
  this.x= width/2;
  this.y=height/2;
  this.radius=width/50;
  this.xspeed=3;
  this.yspeed=3;
  this.flag=true;
}
show()
  {
    fill(255);
    ellipse(this.x,this.y,this.radius*2,this.radius*2);
  }
  
update()
  {
    this.edges();
    this.x+=this.xspeed;
    this.y+=this.yspeed;
  }
  
reset()
  {
  this.x=width/2;
  this.y=height/2;
  this.xspeed*=-1;
  
  }
  
edges(){
 if(this.y<this.radius/2 || this.y>height-this.radius/2)
 {
 this.yspeed*=-1;
 }
 if(this.x<-this.radius ){
   rightScore++;
   this.reset();
 }
 if(this.x>width+this.radius){
   leftScore++;
   this.reset();
 }
}

checkPaddle(p)
  {

    
    
    
    
  
  if(p.dir>0)
  {
    if(this.x+this.radius+p.w/2>p.x && this.y<p.y+p.h/2 && this.y>p.y-p.h/2 && this.xspeed>0 && this.x<p.x)
  {
    this.xspeed*=-1;
  }
  }
  else
  {if(this.x-this.radius-p.w/2<p.x && this.y<p.y+p.h/2 && this.y>p.y-p.h/2 && this.xspeed<0 && this.x>p.x) 
  {
    this.xspeed*=-1;
  }
  
  
  }
/*
  if(abs(this.x-P.x)<(P.w/2+this.radius/2) && abs(this.y-P.y)<(P.h/2+this.radius/2) && this.flag )
  {
  this.xspeed*=-1;
  this.flag=false;
  }
  else 
  {
  this.flag=true;
  }

var sign=this.x-width/2;
var _x;
    

if(this.y<(p.y+p.h/2) && this.y>(p.y-p.h/2))
{
if(sign<0)
{
_x=this.x-this.radius/2-p.w/2;
if(_x<(p.x+2) && _x>p.x)
{
  this.xspeed*=-1;
}
}
else
{
_x=this.x+this.radius/2+p.w/2;
if(_x<(p.x) && _x>p.x-2)
{
  this.xspeed*=-1;
}

}
}
else
{
if(sign<0)
{
//_x=this.x-this.radius/2-p.w/2;
if(this.y<(p.y+p.h/2+2) && this.y>(p.y-p.h/2-2) && this.x<(p.width/2+p.x))
{
p.yspeed*=-1;
p.xspeed*=-1;
}
}
else
{
//_x=this.x+this.radius/2+p.w/2;
if(_x<(p.x) && _x>p.x-2)
{
  this.xspeed*=-1;
}

}
}

 
  
*/
  
  
  }
  }