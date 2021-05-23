
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(950, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(475,490,950,25);
	
	stand = new Ground(390,350,250,10);

	stand2 = new Ground(700,200,200,10);

	block1 = new Box(300,320,30,40);  
	block2 = new Box(330,320,30,40);
	block3 = new Box(360,320,30,40);
	block4 = new Box(390,320,30,40);
	block5 = new Box(420,320,30,40);
	block6 = new Box(450,320,30,40);
	block7 = new Box(480,320,30,40);
	//level two
	block8 = new Box(330,280,30,40);
	block9 = new Box(360,280,30,40);
	block10 = new Box(390,280,30,40);
	block11 = new Box(420,280,30,40);
	block12 = new Box(450,280,30,40);
	//level three
	block13 = new Box(360,240,30,40);
	block14 = new Box(390,240,30,40);
	block15 = new Box(420,240,30,40);
	//top
	block16 = new Box(390,200,30,40);

	//set 2 for second stand
	//level one
	blocks1 = new Box(640,175,30,40);
	blocks2 = new Box(670,175,30,40);
	blocks3 = new Box(700,175,30,40);
	blocks4 = new Box(730,175,30,40);
	blocks5 = new Box(760,175,30,40);
	//level two
	blocks6 = new Box(670,135,30,40);
	blocks7 = new Box(700,135,30,40);
	blocks8 = new Box(730,135,30,40);
	//top
	blocks9 = new Box(700,95,30,40);
	
	polygon = Bodies.circle(90,90,20);
	World.add(world,polygon);

	slingshot = new Slingshot(this.polygon,{x:100,y:300});;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  fill(255,143,53);
  ground.display();

  fill("brown");
  stand.display();
  stand2.display();

  //strokeWeight(2);
  //stroke("black");
  fill(120,255,255);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(255,62,128);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(255,231,159);
  block13.display();
  block14.display();
  block15.display();
  fill(255,255,247);
  block16.display();

  fill(250,235,215);
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  
  slingshot.display();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y , 40, 40);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingshot.fly();
  }

