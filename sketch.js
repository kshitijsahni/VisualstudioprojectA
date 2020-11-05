var car,wall;
var speed,weight;

function setup() {
  //creating canvas
  createCanvas(1600,400);

  //random values for the speed and weight
  speed=random(55,90);
  weight=random(400,1500);

  //car sprite creation 
  car=createSprite(50,200,50,50);
  wall=createSprite(1000,200,60,height/2);
  wall.shapeColor=("black");

  //velocity of the sprite
  car.velocityX=speed;
}

function draw() {
  //background
  background(255,255,255);

  //detecting the collision
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor=(0,255,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=(230,230,0);
    }
    if(deformation>180){
      car.shapeColor=(255,0,0);
    }
  }
  //drawing the sprites
  drawSprites();
}