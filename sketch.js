var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;
var gardenImg;
var tom,jerry;
function preload() {
    //load the images here
mouse1=loadAnimation("images/mouse1.png")
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouse3=loadAnimation("images/mouse4.png")
cat1=loadAnimation("images/cat1.png")
cat2=loadAnimation("images/cat2.png","images/cat3.png")
cat3=loadAnimation("images/cat4.png")
gardenImg=loadAnimation("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addAnimation("sleeping",cat1)
    tom.scale=0.3
    jerry=createSprite(200,600)
    jerry.scale=0.3
    jerry.addAnimation("standing",mouse1)
    
}

function draw() {

    background("0");
    //Write condition here to evalute if tom and jerry collide
          if(tom.x-jerry.x < (tom.width-jerry.width)/2){
              jerry.changeAnimation("standing")
              tom.changeAnimation("sleeping")


          }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX=-4;
    
    tom.addAnimation("running",cat2);
    jerry.addAnimation("teasing",mouse2);
    jerry.frameDelay=25;
    jerry.changeAnimation("teasing")
}

}
