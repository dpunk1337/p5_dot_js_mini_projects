class Food
{
constructor()
{
this.x=random(width);
this.y=random(height);
this.size=random(15,20);
this.green=random(255);
}
create()
{
fill(255,0,this.green);
noStroke();
ellipse(this.x,this.y,this.size,this.size);
}
}