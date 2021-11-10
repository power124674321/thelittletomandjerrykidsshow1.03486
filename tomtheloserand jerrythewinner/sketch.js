var bgImg
var mouse,m1,m2,m4  
var cat,c1,c2,c4
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
c1=loadAnimation("images/cat1.png")
c2=loadAnimation("images/cat2.png","images/cat3.png")
m1=loadAnimation("images/mouse1.png")
m2=loadAnimation("images/mouse2.png","images/mouse3.png")
c4=loadAnimation("images/cat4.png")
m4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addAnimation("catSitting",c1)
cat.scale=0.2
mouse=createSprite(270,600)
mouse.addAnimation("mouseSitting",m1)
mouse.scale=0.2

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.velocityX=0
cat.addAnimation("catLastImage",c4)
cat.changeAnimation("catLastImage")
cat.x=500
cat.scale=0.2
mouse.addAnimation("mouseLastImage",m4)
mouse.changeAnimation("mouseLastImage")
mouse.x=300
mouse.scale=0.2
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",m2)
mouse.changeAnimation("mouseTeasing")
mouse.frameDelay=25
cat.addAnimation("catwalking",c2)
cat.changeAnimation("catwalking")
cat.velocityX=-2
}

}
