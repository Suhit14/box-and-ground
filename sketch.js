const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box1,box2;
var ground



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground=new GROUND(400,350,800,30);
  box1 = new Box(170,100,40,50);
  box2 = new Box(200,200,50,60);
  
}

function draw() {
  background(200);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
 

}

  
