var runner, runnerImage;
var path, invisibleGround, pathImage;
var path2;


function preload(){
  //imagens pré-carregadas
  runnerImage = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  runner = createSprite(260,380);
  runner.addAnimation("Jaxon",runnerImage);
  runner.scale = 0.05;

  path = createSprite(200,200);
  path.addImage("caminho",pathImage);
  path.velocityY = 3;

  path2 = createSprite (280,200,400,400);
  path2.visible = false; 

}

function draw() {
  background(0);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
