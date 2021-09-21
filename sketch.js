var bg_image
var snow,snow_image
var ch1,ch1_image
var ch2,ch2_image
var ch3,ch3_image
var w1,w2
function preload(){
bg_image=loadImage("snow1.jpg")
snow_image=loadImage("snow4.webp")
ch1_image=loadImage("ch-1.png")
ch2_image=loadImage("ch-2.png")
ch3_image=loadImage("ch-3.png")
}


function setup() {

  
  createCanvas(800,400);

  ch2=createSprite(700,280,2,2)
 ch2.addImage("ch-2",ch2_image)
 ch2.scale=0.4

 ch1=createSprite(400,320,2,2)
 ch1.addImage("ch-1",ch1_image)
 ch1.scale=0.4
 ch1.velocityX=2

 

 ch3=createSprite(100,320,2,2)
 ch3.addImage("ch-3",ch3_image)
 ch3.scale=0.32
 w1=createSprite(0,200,10,400)
 w2=createSprite(800,200,10,400)
}

function draw() {
  background(bg_image);  
  if(frameCount%10===0){
  snow=createSprite(Math.round(random(10,790)),10,10,10)
  snow.addImage("snow",snow_image)
  snow.scale=0.08
  snow.velocityY=2
  }
if(ch1.x===750){
  ch1.velocityX=-2
}
if(ch1.x===50){
  ch1.velocityX=2
}

  drawSprites();
}