
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;


function setup() {

	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1350, 600, 20, 120);

	//create the options here.
	var ball_options = {
							isStatic:false,
							restitution:0.3,
							friction:0,
							density:1.2
						}
	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  ellipse(ball.position.x, ball.position.y, 40);	

  groundObj.show();
  leftSide.show();
  rightSide.show();
  
 // drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



