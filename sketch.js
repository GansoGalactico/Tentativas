var ganso;
function setup() {
  createCanvas(400,400);
  ganso = createSprite(200,100,50,50);
  ganso.shapeColor = 'lime';
}

function draw() 
{
  background(100);

if(keyIsDown(UP_ARROW)){
  ganso.position.y = ganso.position.y-2;
}

if(keyIsDown(DOWN_ARROW)){
  ganso.position.y = ganso.position.y+2;
}

if(keyIsDown(RIGHT_ARROW)){
  ganso.position.x = ganso.position.x+2;
}

if(keyIsDown(LEFT_ARROW)){
  ganso.position.x = ganso.position.x-2;
}
















  drawSprites();




















}




