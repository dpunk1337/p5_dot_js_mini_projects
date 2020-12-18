class Tile{
  
  constructor(x,y,wh,next)
  {
    this.x=x;
    this.y=y;
    this.wh=wh;
    this.next=next;
    this.index=next-1;
    this.color= [random(80,255),random(80,255),random(80,255)];
  }
  highlight()
  {
  fill(0,0,0,135);    rect(this.x,this.y,this.wh,this.wh);
  }
  
  show(){
    fill(this.color);
    rect(this.x,this.y,this.wh,this.wh);
        noStroke();
    fill(255-this.color[0],255-this.color[1],255-this.color[2]);
    textSize(32);
    

    text(this.index+1,this.x,this.y+this.wh);  
  }
  
  showSnakesAndLadders()
  {
    if(this.next!=this.index+1){
    let myC=this.getCenter();
    let nxtC=tiles[this.next].getCenter();
    strokeWeight(4);
    if(this.next>this.index)
    {
    stroke(0,180);
    //
    line(myC[0],myC[1],nxtC[0],nxtC[1]);
    var Ax=(myC[0]+nxtC[0])/11;
    var Ay=(myC[1]+nxtC[1])/11;
    for(let i=0;i<=10;i++)
    {
    //line(myC[0],myC[1],nxtC[0],nxtC[1]); 
    //square(myC[0]+(i*Ax),myC[1],
    }
    //
    }
    else
    {
    stroke(255,180);
    //
    fill(0,255,0,220);
    triangle(myC[0]-5,myC[1],myC[0]+5,myC[1],nxtC[0],nxtC[1]);
    fill(255,0,0,180);
    noStroke();
    ellipse(myC[0],myC[1],5,5);  
    //
    }
    //line(myC[0],myC[1],nxtC[0],nxtC[1]);
    strokeWeight(0);
    stroke(0);
    }
  }
  
  getCenter(){
    let cx=this.x+this.wh/2;
    let cy=this.y +this.wh/2;
    return [ cx,cy];
  
  }
  
  showMark(){
  var pos=this.getCenter();
    
  strokeWeight(5);
  stroke(255,0,0,200);
    line(pos[0]-8,pos[1],pos[0]+8,pos[1]);
   line(pos[0],pos[1]-8,pos[0],pos[1]+8);
    stroke(0);
    strokeWeight(1);
    
    
  }
    
    
}