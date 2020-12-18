const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var d1;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   
  d1 = new Division(200,200,84,64);

}

function draw() {
  background('black');
  
  engine.update(Engine);

  d1.display();
  drawSprites();
}