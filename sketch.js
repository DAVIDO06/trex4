

var trex ,trex_running;
var score=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
ground1=loadAnimation("ground2.png");
cloud1=loadImage("cloud.png");
obstace1=loadImage("obstacle1.png");
obstacle2=loadImage("obstacle2.png");
obstacle3=loadImage("obstacle3.png");
obstacle4=loadImage("obstacle4.png");
obstacle5=loadImage("obstacle5.png");
obstacle6=loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)

  //create a trex sprite
 trex=createSprite(50,165,20,50);
 trex.scale=0.5;
 trex.addAnimation("rex",trex_running); 
 ground=createSprite(200,180,400,10);
 ground.addAnimation("floor",ground1);
 //invisible ground
 invisibleground=createSprite(200,190,400,10);
 invisibleground.visible=false;
}

function draw(){
  background("skyblue")
  text("score:"+ score, 500,50);
 
if (gameState==PLAY){
  ground.velocityX=-2;
  score=score+ Math.round(frameCount/60);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&& trex.y>=100){
    trex.velocityY=-5;
  }
  trex.velocityY=trex.velocityY+0.5;
  spawnobstacles();
spawnclouds();
}
 if( gameState==END){
   ground.velocityX=0;

 }
  
  
  
trex.collide(invisibleground);

  drawSprites();

}
function spawnclouds(){
  if(frameCount%60==0){
    cloud=createSprite(600,100,40,10);
    cloud.scale=0.5;
    cloud.addImage(cloud1);
    cloud.velocityX=-3;
    cloud.y=Math.round(random(10,60))
    cloud.depth=trex.depth
    trex.depth=trex.depth+1
    cloud.lifetime=200
  }
  
  
}
function spawnobstacles(){
  if(frameCount%60==0){
    var obstacle=createSprite(600,165,10,40);
    obstacle.velocityX=-6;
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1: obstacle.addImage(obstace1);
              break;
     case 2: obstacle.addImage(obstacle2);
             break;
     case 3: obstacle.addImage(obstacle3);
             break;
     case 4: obstacle.addImage(obstacle4);
             break;
     case 5: obstacle.addImage(obstacle5);
             break;
     case 6: obstacle.addImage(obstacle6);
             break;
     default: break;                   
    }
    obstacle.scale=0.5;
    obstacle.lifetime=100;
  }
}
  


