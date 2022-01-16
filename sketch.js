var score = 0;
var AlienImg , Alien, AlienGroup;
var MarsImg , Mars;
var GirlImg , Girl;
var restartImg , restart;
var BabyAlienImg, BabyAlien;
var gameState = "play";

function preload(){

AlienImg = loadImage("Alien.png");
GirlImg = loadImage("MOVING_GIRL.gif");
BabyAlienImg = loadImage("BabyAlien.png");
MarsImg = loadImage("MarsSurface.jpeg");
restartImg = loadImage("Restart.png");
spaceSound = loadSound("si fi sound.mp3");
}

function setup() {
//createCanvas(windowWidth,windowHeight);
createCanvas(600,300);
Mars = createSprite(300,150);
//Mars = createSprite(windowWidth,windowHeight);
 Mars.scale = 2;
 Mars.addImage("Mars",MarsImg);
 Mars.x= Mars.width/2;
 Mars.velocityX = -1;

 restart = createSprite(300,140, 20,20);
 restart.addImage(restartImg);
 restart.visible = false;
 restart.scale = 0.2;

 AlienGroup = new Group();
 BabyAlienGroup = new Group();
  
 Girl = createSprite(80,180,20,50);
 Girl.scale = 0.05;
 Girl.addImage("Girl", GirlImg);
 
 score = 0;
 
}

function draw() {
 
   background(200);
    if (gameState === "play") 
      score = score + Math.round(getFrameRate()/60);
      Girl.y = World.mouseY;
     //spaceSound.play();

    if(Mars.x < 0){
      Mars.x =Mars.width/2;
    }
    //SpawnGirl()
    SpawnAliens() 
    if(AlienGroup.isTouching(Girl)){
      //Girl.velocityX = 0;
      //Girl.destroy();
      AlienGroup.destroyEach();
      BabyAlienGroup.destroyEach();
      gameState = "end"

    }
    if(BabyAlienGroup.isTouching(Girl)){
      //Girl.velocityX = 0;
      //Girl.destroy();
      AlienGroup.destroyEach();
      BabyAlienGroup.destroyEach();
      gameState = "end";
    }
      if (gameState === "end") {
      restart.visible = true;
    }
 drawSprites();
  
 stroke("white");
 fill("white");
 textSize(15);
 text("Score: "+ score, 480,20);

 stroke("white");
 fill("white");
 textSize(10);
 text("Stay Far away from the Aliens....!!", 420,280);

 stroke("white");
 fill("purple");
 textSize(12);
 text("- Aadya Mishra", 490,290);

if (gameState === "end"){
  stroke("white");
  fill("white");
  textSize(25);
  text("Game Over", 220,100)}

  if(mousePressedOver(restart)) {
    reset();
  }
}

 function SpawnAliens() { 
  
      if (frameCount % 60 === 0) {
    var Alien = createSprite(600,120,40,10);
    Alien.y = Math.round(random(50,400));
    Alien.addImage(AlienImg);
    Alien.scale = 0.1;
    Alien.velocityX = -2;
    AlienGroup.add(Alien);
      }
    if (frameCount % 60 === 0) {
      var BabyAlien = createSprite(600,120,40,10);
      BabyAlien.y = Math.round(random(50,400));
      BabyAlien.addImage(BabyAlienImg);
      BabyAlien.scale = 0.1;
      BabyAlien.velocityX = -2;
      BabyAlienGroup.add(BabyAlien);
    }
      }

      function SpawnGirl() {
        Girl = createSprite(80,180,20,50);
        Girl.scale = 0.05;
        Girl.addImage("Girl", GirlImg);

      }

      function reset(){
        gameState = "play";
        restart.visible = false;
        score = 0;
        
      }