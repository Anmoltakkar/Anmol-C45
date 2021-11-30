var score =0;
var bg,bow,arrow;
var blueBalloon,blueBalloonImg,greenBalloon,greenBalloonImg,redBalloon,redBalloonImg,pinkBalloon,pinkBalloonImg;
var balloon,bird,birdImg;


var gameState=1

function preload(){
bgImg  = loadImage("assets/bgEdit.png")
bowImg = loadImage("assets/bow.png")
arrowImg = loadImage("assets/arrow edit.png")
blueBalloonImg = loadImage("assets/blue balloon.png")
greenBalloonImg = loadImage("assets/green balloon.png")
redBalloonImg = loadImage("assets/red balloon.png")
pinkBalloonImg = loadImage("assets/pink balloon.png")
birdImg = loadImage("assets/bird.png")
}
function setup() {
  createCanvas(1000, 500);

  bow = createSprite(20,250,20,20)
  
  
  bow.addImage(bowImg)
  
  bow.scale = 0.4

  
 

  
}

function draw() {
  background(bgImg);

  bow.y = World.mouseY
  


  

  
  

  if(frameCount%60 === 0 && keyDown("space")) {
    
   arrow = createSprite(bow.x,bow.y,10,10)
   
    arrow.addImage(arrowImg)
    arrow.velocityX = 10
  }

  
 
 
  
   spawnBalloon();
   spawnBird();
      drawSprites();
      

    }  


      function spawnBalloon(){

        if(frameCount%190===0){

        balloon = createSprite(random(900,980),random(550,700),50,50)
        balloon.scale = 0.5
        balloon.velocityY =-3


          var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: balloon.addImage(greenBalloonImg);
              break;
      case 2: balloon.addImage(redBalloonImg);
              break;
      case 3: balloon.addImage(blueBalloonImg);
              break;
      case 4: balloon.addImage(pinkBalloonImg);
              break;
      default: break;
    }
        }
      }

      function spawnBird(){
        if(frameCount%350===0){
          console.log("buye")
          bird = createSprite(1100,random(50,450))
         bird.addImage(birdImg)
         bird.scale = 0.4
         bird.velocityX = -6
        }
      }

      
    
  