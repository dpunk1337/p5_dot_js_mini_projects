var tiles=[];
var d=[];
var index=0;



function setup() {
  createCanvas(400, 400);
  d[0]=width/3;
  d[1]=height/3;

  createTile()

}

function draw() {
  background(128);
  showGrid();
  showTile();
  checkForWinnerZero();
  checkForWinnerCross();


}

function showGrid()
{
stroke(255);
strokeWeight(height/30);
line(d[0],0,d[0],height);
line(2*d[0],0,2*d[0],height);
line(0,d[1],width,d[1]);
line(0,2*d[1],width,2*d[1]);
}

function mousePressed()
{
if(index<9)
{
let i=findIndex(mouseX,mouseY);
if(index%2==0)
{
tiles[i].zero=true;
}
else
{
tiles[i].cross=true;
}
index++;
}
else
{
draww();
noLoop();
}

}

function findIndex(x,y)
{
i=(floor(mouseX/d[0]));
    j=(floor(mouseY/d[1]));
return (i*3)+j;

}

function createTile()
{
  for(let i=0;i<3;i++)
  {
  for(let j=0;j<3;j++)
  {
 tiles.push( new Tile((i+0.5)*d[0],(j+0.5)*d[1]));

  }
  }
}

function showTile()
  {
    for(let i=0;i<9;i++)
  {
    tiles[i].show();
  }
 }

function checkForWinnerZero()
{
if(tiles[4].zero)
{
if(tiles[0].zero)
{
if(tiles[8].zero)
{
win();
noLoop();
}
}
if(tiles[3].zero)
{
if(tiles[5].zero)
{
win();
noLoop();
}
}
if(tiles[1].zero)
{
if(tiles[7].zero)
{
win();
noLoop();
}
}
if(tiles[2].zero)
{
if(tiles[6].zero)
{
win();
noLoop();
}
}
}
else
{
if(tiles[0].zero)
{
if(tiles[6].zero)
{
if(tiles[3].zero)
{
win();
noLoop();
}
}
else if(tiles[2].zero)
{
if(tiles[1].zero)
{
win();
noLoop();
}
}

}
else if(tiles[8].zero)
{
if(tiles[6].zero)
{
if(tiles[7].zero)
{
win();
noLoop();
}
}
else if(tiles[2].zero)
{
if(tiles[5].zero)
{
win();
noLoop();
}
}

}
}
}

function checkForWinnerCross()
{
if(tiles[4].cross)
{
if(tiles[0].cross)
{
if(tiles[8].cross)
{
win();
noLoop();
}
}
if(tiles[3].cross)
{
if(tiles[5].cross)
{
win();
noLoop();
}
}
if(tiles[1].cross)
{
if(tiles[7].cross)
{
win();
noLoop();
}
}
if(tiles[2].cross)
{
if(tiles[6].cross)
{
win();
noLoop();
}
}
}
else
{
if(tiles[0].cross)
{
if(tiles[6].cross)
{
if(tiles[3].cross)
{
win();
noLoop();
}
}
else if(tiles[2].cross)
{
if(tiles[1].cross)
{
win();
noLoop();
}
}

}
else if(tiles[8].cross)
{
if(tiles[6].cross)
{
if(tiles[7].cross)
{
win();
noLoop();
}
}
else if(tiles[2].cross)
{
if(tiles[5].cross)
{
win();
noLoop();
}
}

}
}
}


function win()
{
textAlign(CENTER);
textSize(height/18);
stroke(0);
strokeWeight(height/40);
fill(255,125,0);
text('WINNER WINNER CHICKEN DINNER',width/2,height/2);
}


function draww()
{
textAlign(CENTER);
textSize(height/18);
stroke(0);
strokeWeight(height/40);
fill(0,255,0);
text('It\'s a draw!!!!',width/2,height/2);
}
