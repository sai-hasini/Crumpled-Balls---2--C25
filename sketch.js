
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// declaring varibles
var dustbin1, ball1 ,ground1
var bgimg	

function preload()
{
	// loading image
	bgimg = loadImage("waste paper.jpg")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies 
	dustbin1=new Dustbin(1200,650);
	ground1 = new Ground(600,650,1600,20);
	ball1 = new Paper(300,500,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimg);
  
  // text
  textSize(50);
  fill("black")
  text("Crumpled Balls - 2",450,350)

//displaying
  ground1.display();
  ball1.display();
  dustbin1.display();

  drawSprites();

 
 
}

// function keypressed
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
    
  	}
}


