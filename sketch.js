var log1,log2,log3;
var dustBin,binImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImage = loadImage("Sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;
	
	dustBin=createSprite(950,430,10,10);
	dustBin.addImage("bin",binImage);
	log1=new Log(1050,470,200,20);
	log2=new Log(950,430,20,100);
	log3=new Log(1150,430,20,100);
	paper = new paperClass(100,50,20);
	ground1 = new Ground(600,490,1200,20);

	Engine.run(engine);
	console.log(paperClass);
}

function draw() {
  background(225);
  rectMode(CENTER);
  paper.display();
  ground1.display();
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

