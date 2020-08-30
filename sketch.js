
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Tree;

function preload()
{
TreeImage = loadImage("tree.png");	
BoyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 tree  = new TREE(610,485);

	 ground = new GROUND(400,690);

	 mango = new MANGO(700,350,25);

	 mango1 = new MANGO(700,430,25);

	 mango2 = new MANGO(770,450,25);

	 mango3 = new MANGO(570,430,25);

	 mang04 = new MANGO(610,350,25);

	 mang05 = new MANGO(500,450,25);

	 mang06 = new MANGO(470,410,27);

	 mang07 = new MANGO(500,500,28);

	 stone = new STONE(140,550,15);

	 sling = new SHOT(stone.body,{x:140,y:550});

	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  background("yellow");
  tree.display();
  ground.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mang04.display();
  mang06.display();
  mang07.display();
  image(BoyImage,200,630,200,200);
  stone.display();
  sling.display();

  collide(stone,mango);	
  collide(stone,mango1);
  collide(stone,mango2);
  collide(stone,mango3);
  collide(stone,mang04);
  collide(stone,mang06);
  collide(stone,mang07);

  drawSprites();
 
}

 function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
	sling.chiddiyaUdd();		
}

function collide(lstone,lmango){
	mangobodypositon = lmango.body.position;
	stonebodypositon = lstone.body.position;

	var distance = dist(stonebodypositon.x,stonebodypositon.y,mangobodypositon.x,mangobodypositon.y);
		if (distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}


}

function keyPressed (){
	if (keyCode === 32 ){
		Body.setPosition(stone.body,140,550);
		sling.attach(stone.body);
	}
}



