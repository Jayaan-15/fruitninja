var frgroup
var ksound
var score=0
var fruit1
var fruit1img
var fruit2img
var fruit3img
var fruit4img
var swordsprite
var swordimg
function preload(){
  swordimg=loadImage("knife.png") 
  fruit1img=loadImage("fruit1.png")
  fruit2img=loadImage("fruit2.png")
  fruit3img=loadImage("fruit3.png")
  fruit4img=loadImage("fruit4.png")
  ksound=loadSound("knifeSwoosh.mp3")
  
  
}



function setup() {
  createCanvas(600, 600);
  swordsprite=createSprite(300,300,10,10)
  swordsprite.addImage("knife",swordimg)
  frgroup=createGroup()
  
}

function draw() {
  background("lightblue");
  swordsprite.x=mouseX
  swordsprite.y=mouseY
  fruitmaker()
  console.log(frameCount)
  if(swordsprite.isTouching(frgroup)){
    frgroup.destroyEach()
    score=score+1
    ksound.play()
     
     }
  
  
  drawSprites();
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}
function fruitmaker()
{
  if(frameCount%80===0){
    fruitsprite=createSprite(600,300,10,10)
  fruitsprite.velocityX=-7
  fruitsprite.scale=0.5
  fruitsprite.y=Math.round(random(20,600))
  var a = Math.round(random(1,4))
  switch(a)
    {
      case 1:fruitsprite.addImage("fruita",fruit1img)
        break
        case 2: fruitsprite.addImage("fruitb",fruit2img)
        break
        case 3:fruitsprite.addImage("fruitc",fruit3img)
        break
        case 4:fruitsprite.addImage("fruitd",fruit4img)
        break
        
     }
        frgroup.add(fruitsprite)
  
  
    }
}

