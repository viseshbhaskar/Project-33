var backgroundImg;
var snow, snowImg;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(backgroundImg);
  summonsnow();
  drawSprites();
}

function summonsnow() {
  if (frameCount % 60 == 0) {
    snow = createSprite(10,0,10,10);
    snow.x = Math.round(random(0,800));
    snow.addImage(snowImg);
    snow.scale = 0.2;
    snow.velocityY = 2;
    snow.lifetime = 800;
    snow.depth = backgroundImg.depth;
    snow.depth = snow.depth + 1;
  }
}