
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var paperBall;

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,590,1000,40);

	paperBall = new Paper(85,300,5);
	boxLeft = new Box(640,520,20,100);
	boxMiddle = new Box(750,560,200,20);
	boxRight = new Box(855,520,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(116,241,255);
  
  ground.display();

  paperBall.display();
  boxLeft.display();
  boxMiddle.display();
  boxRight.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x: 4,y: -4});
	}
}