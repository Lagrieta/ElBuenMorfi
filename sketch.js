var Combinada, Especial, Mexicana ,Napolitana, Pollo, Portenia;
var CombinadaImg, EspecialImg, MexicanaImg ,NapolitanaImg, PolloImg, PorteniaImg;

var Logotipo, logotipoImg;

function preload(){
  
 CombinadaImg = loadImage("COMBINADA.png");
 EspecialImg = loadImage("ESPECIAL.png");
 MexicanaImg = loadImage("MEXICANA.png");
 NapolitanaImg = loadImage("NAPOLITANA.png");
 PolloImg = loadImage("POLLO.png");
 PorteniaImg = loadImage("PORTENIA.png");
 logotipoImg = loadImage("Logo.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  Logotipo = createSprite(width/2, height/2, 50,50);
  Logotipo.addImage(logotipoImg);
  Logotipo.scale = 0.5;

}

function draw() {
  background("black");
  
  
  var select_pizza = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_pizza == 1) {
      COMBINADA();
    } else if (select_pizza == 2) {
      ESPECIAL();
    } else if (select_pizza == 3) {
      MEXICANA();
    } else if (select_pizza == 4) {
      NAPOLITANA();
    } else if (select_pizza == 5) {
      POLLO();
    } else{
      PORTENIA();
    }
  }
  
  
    
  drawSprites();
}

function COMBINADA() {
  var comb = createSprite(Math.round(random(20,1800)),height,50,50);
  comb.addImage(CombinadaImg);
  comb.velocityY = -3;
  comb.lifetime = 250;
  comb.scale = 0.3;
}

function ESPECIAL() {
  var esp = createSprite(Math.round(random(20,1800)),height, 10, 10);
  esp.addImage(MexicanaImg);
  esp.velocityY = -3;
  esp.lifetime = 250;
  esp.scale = 0.3;
}

function NAPOLITANA() {
  var nap = createSprite(Math.round(random(20,1800)),height, 10, 10);
  nap.addImage(NapolitanaImg);
  nap.velocityY = -3;
  nap.lifetime = 250;
  nap.scale = 0.3;
}

function POLLO() {
  var poll = createSprite(Math.round(random(20,1800)),height, 10, 10);
  poll.addImage(PolloImg);
  poll.velocityY = -3;
  poll.lifetime = 250;
  poll.scale = 0.3;
}

function PORTENIA() {
  var port = createSprite(Math.round(random(20,1800)),height, 10, 10);
  port.addImage(PorteniaImg);
  port.velocityY = -3;
  port.lifetime = 250;
  port.scale = 0.3;
}

function MEXICANA() {
  var mex = createSprite(Math.round(random(20,1800)),height, 10, 10);
  mex.addImage(CombinadaImg);
  mex.velocityY = -3;
  mex.lifetime = 250;
  mex.scale = 0.3;
}