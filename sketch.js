
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
 var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
}


function draw() {
background(255)
  if(ground.x<0){ground.x=ground.width/2}
  if(keyDown("space")){monkey.velocityY = -12}
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground)
  
  if (frameCount % 120 === 0) {
     banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(40,80));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.scale = 0.1
  }
  
  if (frameCount % 340 === 0) {
    obstacle = createSprite(600,165,10,40);
    obstacle.y = Math.round(random(325,325));
    obstacle.addImage(obstaceImage)
    obstacle.scale = 0.3;
    obstacle.velocityX = -3;
  }
  
  stroke("white");
  textSize(20);
  fill("white")
  text("score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime, 100,50)
   drawSprites(); 
  
  drawSprites()
}






