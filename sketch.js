var bg, bgImg
var bottomGround
var topGround
var fish_1,fish_2,fish_3,fish_4,fish_5

function preload(){
bgImg = loadImage("assets/real ocean.jpg");
fish_1=loadImage("assets/fish1.png");
fish_2=loadImage("assets/fish2.jpg");
//fish_3=loadImage("assets/fish3.png");
fish_4=loadImage("assets/fish4.jpg");
fish_5=loadImage("assets/fish5.png");

}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
//bottomGround = createSprite(200,390,800,20);
//bottomGround.visible = false;

//topGround = createSprite(200,10,800,20);
//topGround.visible = false;
      
    
fishes1 = createSprite(100,200,20,50);
fishes1.addImage("fishesaqua",fish_1);
fishes1.scale = 0.2;



}

function draw() {
  
  background(0);
        
          
          
        drawSprites();
        
}