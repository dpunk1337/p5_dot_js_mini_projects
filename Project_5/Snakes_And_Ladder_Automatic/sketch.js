const ROLL_STATE=0;
const MOVE_STATE=1;
const SNADDER=2;
const MOVEONLINE=3;

let permission=false;
let state = ROLL_STATE;

let tiles=[];
let player;
let fRate=100;

function setup() {
  createCanvas(360, 360);
  background(0,0,255);
  frameRate(fRate);
  
  let resolution =36;
  let cols=width/resolution;
  let rows=height/ resolution;
  
  let x=0;
  let y=(rows-1)*resolution;
  let dir=1;
  for(let i=0;i<cols*rows;i++)
  {
    let tile=new Tile(x,y,resolution,i+1)
    tiles.push(tile);
    x=x+(resolution*dir);
    if(x>=width || x<0)
    {
      dir *= -1;
      x+=resolution*dir;
      y-=resolution;
    }
    
  }
  //snakes:-
  tiles[98].next=2;
  tiles[73].next=37;
  tiles[49].next=12;
  tiles[80].next=69;
  tiles[15].next=3;
  //ladders:-
  tiles[11].next=94;
  tiles[33].next=60;
  tiles[6].next=34;
  tiles[79].next=89;
  tiles[19].next=59;
  tiles[9].next=50;

  
  player=new Player();
  createBoard();
  player.show();

}

function draw() {
  
  createBoard();
  //if(state!=MOVEONLINE)
  //player.show();
  
  if(state==MOVEONLINE)
  {
    var a=player.moveOnline();
    if(a==true){
        state=SNADDER;
    }
  }
  else if(state== ROLL_STATE)
  {
    player.show();
    if(!player.isOnSnadder())
    {
    player.rollDie();
    state=MOVE_STATE;
    }
    else
    {
    frameRate(fRate+3);
    state=SNADDER;
    }
  }
  else if(state==MOVE_STATE)
  {
    player.show();
    player.showPreview();
    player.moveRoll();
    state=ROLL_STATE;
  }
  else if(state== SNADDER)
  {
  if(permission==false)
  {
    player.setParametersForMoveOnline();
    state=MOVEONLINE;
    permission=true;
    createBoard();
  }
  else{
  player.spot=(tiles[player.spot].next);
    state= ROLL_STATE;
    permission=false;
    frameRate(2);
  }
  }
  
  if(player.spot >= tiles.length-1){
    player.spot=tiles.length-1;
    createBoard();
    player.show();
    console.log('game over');
    noLoop();
  }
}

function createBoard()
{
  for (let tile of tiles)
  {
    tile.show();
  }
  for (let tile of tiles)
  {
    tile.showSnakesAndLadders();
  }
}