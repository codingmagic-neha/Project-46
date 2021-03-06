var bg, bgImg;
var eraserImg, eraser;

var fear, fearImg;
var awful, awfulImg;
var brilliant, brilliantImg;
var champion, championImg;
var dazzling, dazzlingImg;
var fabulous, fabulousImg;
var fail, failImg;
var hate, hateImg;
var terrific, terrificImg;
var wonderful, wonderfulImg;
var bad, badImg;
var positiveGroup, negativeGroup;
var positive, negative;
var gameOver,gameOverImg;


var PLAY=1;
var END=0;
var gameState=1;

var score;

function preload(){
    bgImg = loadImage("images/paper.png");
    eraserImg = loadImage("images/eraser.png");
    fearImg = loadImage("images/fear.png");
    awfulImg = loadImage("images/awful.png");
    brilliantImg = loadImage("images/brilliant.png");
    championImg = loadImage("images/champion.png");
    dazzlingImg = loadImage("images/dazzling.png");
    fabulousImg = loadImage("images/fabulous.png");
    failImg = loadImage("images/fail.png");
    hateImg = loadImage("images/hate.png");
    terrificImg = loadImage("images/terrific.png");
    wonderfulImg = loadImage("images/wonderful.png");
    badImg = loadImage("images/bad.png");
    gameOverImg = loadImage("images/gameOver.jpg");
    

    
}

function setup() {
  createCanvas(1200,800);
  bg = createSprite(600,400,1200,800);
  bg.addImage("bg",bgImg);
  bg.scale = 1.7;

  eraser = createSprite(400,600);
  eraser.addImage("e",eraserImg);
  eraser.scale = 0.4;

  positiveGroup = new Group();
  negativeGroup = new Group();

  score = 0;

  gameOver = createSprite(600,400);
  gameOver.addImage("g.o", gameOverImg);
  gameOver.visible = false;
}
function draw() {
  background(0);  
  
  if(gameState === PLAY ){
    eraser.y = mouseY;
    eraser.x = mouseX;
  
    spawnPositiveWords();
    spawnNegativeWords(); 
  
    if(positiveGroup.isTouching(eraser)){
      gameState = END;

    }

    if(negativeGroup.isTouching(eraser)){
      score=score+2;
      negativeGroup[0].destroy();
    }


    drawSprites();
    fill("red");
    textSize(40);


    text("Score : "+ score,938,60);
  }

  if(gameState === END ){
    positiveGroup.destroyEach();
    gameOver.visible = true;

  }
  
}

function spawnPositiveWords(){
  if(frameCount % 40 === 0){
    positive = createSprite(random(50,1100),0);
    positive.velocityY = 7;

    var r=Math.round(random(1,6));
    if (r === 1) {
      positive.addImage(terrificImg);
    } else if (r === 2) {
      positive.addImage(wonderfulImg);
    } else if (r === 3) {
      positive.addImage(fabulousImg);
    } else if (r === 4){
      positive.addImage(dazzlingImg);
    } else if (r === 5){
      positive.addImage(championImg);
    } else{
      positive.addImage(brilliantImg);
    }
    positiveGroup.add(positive);
  }
}
  function spawnNegativeWords(){
    if(frameCount % 80 === 0){
      negative = createSprite(random(50,1100),0);
      negative.velocityY = 8;
     
      var n=Math.round(random(1,5));
      if (n === 1) {
        negative.addImage(fearImg);
      } else if (n === 2) {
        negative.addImage(failImg);
      } else if (n === 3) {
        negative.addImage(hateImg);
      } else if (n === 4){
        negative.addImage(badImg);
      } else{
        negative.addImage(awfulImg);
      } 
      negativeGroup.add(negative);

    }
  }
