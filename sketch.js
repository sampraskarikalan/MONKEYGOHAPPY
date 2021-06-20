
var monkey , monkey_running,monkeyImage;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
monkey_running =loadAnimation("sprite_0.png","sprite_1.png",
"sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png",
"sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
 
}



function setup() {
createCanvas(600, 600);
monkey = createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10)
ground.velocityX=-8;                    
ground.X=ground.width/2;
console.log(ground.x)
  

obstacleGroup = new Group();
bananaGroup = new Group();
  
 

  
}


function draw() {
 background(255);
  
  survivalTime = 0;
  
  stroke("white");
  textSize(20);
  fill("white");
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime ,100 , 50);
  
  
ground.velocityX = -10

  if (ground.x < 0){
      ground.x = ground.width/2;
  }    
  
  monkey.collide(ground);
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
     score=score+1
  }
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  drawSprites();
    text("Score: "+ score, 400,50);
  
   function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
  
  }
  monkey.lifetime = 200;
    
    //adjust the depth
    monkey.depth = trex.depth;
    monkey.depth = trex.depth + 1;
    
    //add each cloud to the group
    bananasGroup.add(banana);
  }
  
}

function spawnObstacles(){
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;banana.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
    }
  

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
              default: break;
              }
  }  
  
  
  
  
}






  }   
  } 