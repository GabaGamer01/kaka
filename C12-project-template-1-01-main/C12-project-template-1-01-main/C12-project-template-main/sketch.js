var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
  pathImg.loadImage("rua",path.jpg);
  boyImg.loadAnimation("garoto",Runner1.png,Runner2.png);
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path = createSprite(10,40,40,40);
 path.addImage("caminho",pathImg);
path.velocityY=1
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

boy=createSprite(10,10,10,10);
boy.addAnimation("corre",boyImg);
//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=world.mouseX;
  // mover o menino com o mouse usando mouseX
  
  
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
