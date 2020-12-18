class Tile
{
constructor  (_x,_y)
  {
    this.x=_x;
    this.y=_y;
    this.cross=false;
    this.zero=false;
    this.marked=[];
  }
showCross()
{
  noStroke();
  fill(255);
  rectMode(CENTER);
  translate(this.x,this.y);
  rotate(QUARTER_PI);
  rect(0,0,0.75*width/3,height/10/3);
  rect(0,0,width/10/3,0.75*height/3);
  resetMatrix();
}
 showZero()
{
  noFill();
  stroke(255);
  strokeWeight(height/30);
  ellipse(this.x,this.y,0.75*width/3,0.75*height/3);
  
}
  
  show()
  {
  if(this.cross)
  {
    this.showCross();
  }
  else if(this.zero)
  {
    this.showZero();
  }
  
  }


}