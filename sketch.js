var Virus1,rImg,bgImg,roadImg;
var runner,ground,back,vgrp;
var gameState=1;

function preload(){
  rImg=loadAnimation("Capture1.png","Capture3.png","Capture4.png")
 Virus1=loadImage("virus.png"); 
 bgImg=loadImage("New Back.jpg")
}


function setup() {
  createCanvas(1900,950);


  back=createSprite(300,500,1800,2000)
  back.addImage("back",bgImg);
  back.scale=6.2;
  back.velocityX=-5

  runner=createSprite(30,850,20,20);
  runner.addAnimation("runner",rImg);
  runner.scale=0.02;

  vgrp = new Group();

  ground=createSprite(0,900,4000,20)
  //ground.visible = false;
}
          
function draw() {
  background("black"); 
  text("x : "+mouseX + ", y : " + mouseY, 10,10 ) 
 if(gameState == 1){
  if(back.x<300){
    back.x=back.width/2;
  }
  obstacles();
  if(keyDown("A")){
    runner.x = runner.x-3;
  }
  if(keyDown("D")){
    runner.x=runner.x+4;
  }
  if(keyDown("space")){
    runner.velocityY=-10;
  }
}
  runner.velocityY=runner.velocityY+0.8

  runner.collide(ground);
 
  drawSprites(); 

if(gameState == 0){
  runner.velocityX = 0;
  runner.pause();
  back.velocityX = 0;
  fill("red");
  textSize(32);
  text("YOU LOSED! ",850,450)
  text("Try Harder, I know you can  ",850,525)
}

}


function obstacles(){
  if(frameCount%100 == 0){
    var Virus = createSprite(1900,800,10,10)
    Virus.addImage("Virus",Virus1)
    Virus.scale=0.2;
    Virus.velocityX=-10;
    Virus.y = Math.round(random(700,850))
    vgrp.add(Virus);
    Virus.lifeTime=1900;
  }

   if(runner.isTouching(vgrp)){
    gameState = 0; 
    //runner.pause()
     console.log("plr touching virus")
   }

}



