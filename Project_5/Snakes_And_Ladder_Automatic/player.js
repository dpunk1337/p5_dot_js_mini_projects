class Player{
  constructor()
  {
    this.spot=0;
  }
  
  rollDie(){
    this.roll=floor(random(1,6.99999));
    this.next=this.spot+this.roll;
  }
  
  showPreview(){

  let end=min(this.next,tiles.length-1);
  //if(!this.isOnSnadder())
  //{
  for(var i=this.spot; i<end;i++)
  {
    tiles[i+1].highlight();
  }
    tiles[i].showMark(); 
  //}
  }
  
  moveRoll(){
    //if(this.isOnSnadder())
    //{
    //this.spot=(tiles[this.spot].next);
    //this.show();
    //}
    
    this.spot +=this.roll;
    
  }
  
  show(){
  let current= tiles[this.spot];
  fill(255,0,0,180);
  let center=current.getCenter();
  stroke(0);
  strokeWeight(4);
  ellipse(center[0],center[1],32,32);
  strokeWeight(1);
  }
  
  moveOnline()
  {
  fill(255,0,0,180);
  stroke(0);
  strokeWeight(4);
  ellipse(this.p1[0],this.p1[1],32,32);
  this.p1[0]+=this.vx;
  this.p1[1]+=this.vy;
  strokeWeight(1);
  
  if(abs(this.p1[0]-this.p2[0])<0.1 && abs(this.p1[1]-this.p2[1])<0.1)
  {
    return true;}
  else
  {  
    return false;}
 }
  setParametersForMoveOnline()
  {
    var currentTile=tiles[this.spot];
    var nextTileSpot=tiles[this.spot].next;
    var nextTile=tiles[nextTileSpot];
    this.p1=currentTile.getCenter();
    this.p2=nextTile.getCenter();
    this.vx=((this.p2[0]-this.p1[0])/20);
    this.vy=((this.p2[1]-this.p1[1])/20);
    
  }
  
  isOnSnadder()
  {
      if(this.spot!=((tiles[this.spot].next)-1))
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }
}