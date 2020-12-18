class Snake
{
constructor(_x=width/2,_y=height/2)
{
this.x=_x;
this.y=_y;
this.size=10;
}
square()
{
strokeWeight(1);
stroke(51);
fill(255);
rect(this.x-this.size/2,this.y-this.size/2,this.size,this.size);
}
}