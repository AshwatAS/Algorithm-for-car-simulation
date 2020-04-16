function setup() {
  createCanvas(1600,400);
  wall=createSprite(1430,200,20,400);
  //wall.debug=true;
  car=createSprite(20,200,20,20);
  car.shapeColor="white";
  //car.debug=true;
  car.velocityX=8;
}

function draw() {
  background(0,0,255);
  if(car.isTouching(wall)){
    weight=random(400,1500);
    speed=random(30,95);
    deformation=0.5*weight*speed*speed/22500
    car.velocityX=0;
    if(deformation<100){
      car.shapeColor="green";
      car.x=800;
    }
    if(deformation>=100 && deformation<=180){
      car.shapeColor="yellow";
      car.x=800;
    }
    if(deformation>180){
      car.shapeColor="red";
      car.x=800;
    }
  }
  drawSprites();
}