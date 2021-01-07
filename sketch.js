
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contsraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup()
 {
	createCanvas(800, 700);
	//background("white");
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobDiameter = 40;
	console.log(bobDiameter);

	bobObject1 = new Bob(250,300,20);
	bobObject2 = new Bob(290,300,20);
	bobObject3 = new Bob(330,300,20);
	bobObject4 = new Bob(370,300,20);
	bobObject5 = new Bob(410,300,20);

	roof = new Roof(330,100,245);


	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0) 
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1, 0) 
	rope3 = new Rope(bobObject3.body,roof.body,0, 0) 
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1, 0) 
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() 
{
  Engine.update(engine);
  rectMode(CENTER);
  background("lightgrey");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  drawSprites();
 
}




function keyPressed()
{
	/*if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:1,y:-2});
		
	}

	if(keyCode === DOWN_ARROW)
	{
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: 0, y: 1});
	}*/

	if(keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -4, y: -5});
	}

	/*if(keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: 1, y: 0});
	}*/
}

