
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	var p1=width/2;
	var p2=height/4+500;
	bob1=new bob(p1-bobDiameter*2,p2,bobDiameter);
	bob2=new bob(p1-bobDiameter,p2,bobDiameter);
	bob3=new bob(p1,p2,bobDiameter);
	bob4=new bob(p1+bobDiameter,p2,bobDiameter);
	bob5=new bob(p1+bobDiameter*2,p2,bobDiameter);
	
	
	//Create a Ground
	

	


	rope1=new rope(bob1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new rope(bob2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bob5.body,roofObject.body,bobDiameter*2, 0)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}









