var setKey='ArrowUp';
var size=10;
var speed=70;
var px,py;
var snakesq=[];
var t1;
var N=7;
var count=0;
var food=[];
var d;
function setup()
{
createCanvas(400,400);

food[0]=new Food();
food[1]=new Food();
snakesq[0]=new Snake();
px=width/2;
py=height/2;
t1=millis();
}

function draw()
{
background(0);
food[1].create();
if(keyIsPressed)
{
checkKey();
}
removeTail();
normalMove();
if(foodIsTouched())
{
food.shift();
food[1]=new Food();
N+=count;
}
showSnake();
}

function checkKey()
{
setKey=key;
}

function showSnake()
{
for(let i=0;i<snakesq.length;i++)
{
snakesq[i].square();
if(i!=count) 
{ var d=(dist(snakesq[count].x,snakesq[count].y,snakesq[i].x,snakesq[i].y));
if(d<2)
{
alert("game over");
snakesq.splice(0);
snakesq.push( new Snake())
N=7;
count=0;
px=width/2;
py=height/2;

}
}
}
}

function normalMove()
{
if((millis()-t1)>(10000/speed))
{
count++;
t1=millis();
switch(setKey)
{
  case 'ArrowRight':
px+=size+1;
if(px>width)
{px=0;}
snakesq.push(new Snake(px,py));
    break;
  case 'ArrowLeft':
px-=size;
if(px<0)
{px=width;}
snakesq.push(new Snake(px,py));
    break;
case 'ArrowUp':
py-=size;
if(py<0)
{py=height;}
snakesq.push(new Snake(px,py));
    break;
case 'ArrowDown':
py+=size;
if(py>height)
{py=0;}
snakesq.push(new Snake(px,py));
    break;
}
}
}

function removeTail()
{
if(count>=N)
{
snakesq.shift();
count--;
}
}

function foodIsTouched()
{
return (dist(snakesq[count].x,snakesq[count].y,food[1].x,food[1].y)<food[1].size);
}

function touchItself()
{

}
