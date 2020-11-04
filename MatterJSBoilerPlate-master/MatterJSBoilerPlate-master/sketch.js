var ball,ballSprite, ballImg;
var lbin,dbin,rbin,ground,dustbin;
var lbinSprite,dbinSprite,rbinSprite,dustbinSprite;
var t,opt;
var dustbinImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg= loadImage("sprites/dustbingreen.png");	
	ballImg= loadImage("sprites/paper.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	t= {isStatic: true}
	opt= { restitution: 0.3, friction: 0.5, density: 1.2}
	
	ball= Bodies.circle(40,675,20,opt);
	World.add(world,ball);


	ballSprite= createSprite(40,660,20,20);
	ballSprite.addImage(ballImg);
	ballSprite.scale=1.5;
	ballSprite.debug= true;
	ballSprite.setCollider("circle",0,0,10);

	rbin= Bodies.rectangle(1120,630,20,150,t);
	World.add(world,rbin);
	 
	dbin= Bodies.rectangle(1050,670,130,20,t);
	World.add(world,dbin);

	lbin= Bodies.rectangle(990,630,20,150,t);
	World.add(world,lbin);

	
	lbinSprite= createSprite(990,630,20,150);
	lbinSprite.shapeColor= "white";

	dbinSprite= createSprite(1050,670,130,20);
	dbinSprite.shapeColor= "white";

	rbinSprite= createSprite(1120,630,20,150);
	rbinSprite.shapeColor= "white";

	dustbinSprite= createSprite(1050,630,20,100);
	dustbinSprite.addImage(dustbinImg);
	dustbinSprite.scale= 0.7

	groundSprite= createSprite(600,690,1200,20);
	groundSprite.shapeColor= "yellow";

	ground= new Ground();


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
 ellipseMode(CENTER);
  imageMode(CENTER);
  background(0);
  Matter.Engine.update(engine);
  ground.display();
 
  rect(dbin.position.x,dbin.position.y,130,20);
  rect(lbin.position.x,lbin.position.y,20,150);
  rect(rbin.position.x,rbin.position.y,20,150);

  circle(ball.position.x, ball.position.y,20); 
  
 ballSprite.x= ball.position.x;
 ballSprite.y= ball.position.y;
  
  drawSprites();
 
}

function keyPressed(){

	
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,ball.position, {x: 90, y: -90})
		
	}
	
}
