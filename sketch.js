function setup() {
  createCanvas(1600,400);
 
  weight=Math.round(random(30,52))
  bullet=createSprite(50, 200, 50, 50);

  speed=Math.round(random(223,321));

  thick=Math.round(random(22,83));

  wall=createSprite(1350,200,thick,height/2);

  bullet.velocityX=speed-190;

  damage=0.5*weight*speed*speed/(thick*thick*thick);
   
 


}

function draw() {
  background(0);  
  if (wall.x - bullet.x < bullet.width/2 + wall.width/2
    && bullet.x - wall.x < bullet.width/2 + wall.width/2) {
  bullet.velocityX=0;
  if (damage>10){
    
    wall.shapeColor=color(255,0,0)
  }
  if (damage<10){
    wall.shapeColor=color(0,255,0)
  }
  
}
  wall.visible=1;
  //Fill=color("red")
  
  drawSprites();
}
function touching(wall,bullet){
  
if (wall.y - bullet.y < bullet.height/2 + wall.height/2
  && bullet.y - wall.y < bullet.height/2 + wall.height/2){
 
}
}
