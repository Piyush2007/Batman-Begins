const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine,world;

var maxDrops = 100;

var boy ;

var drops = [];

var t1, t2, t3, t4;


function preload(){
    bgImg= loadImage("bg.png");
}
function setup() {

  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  



   for (var k = 0; k <=maxDrops; k++) {
    drops.push(new Drop(random(0,400),random(0,400),5));
   }

   boy = new Umbrella(300,390,80);


}
 


function draw() {

  background(bgImg);
  Engine.update(engine);


   for (var i = 0; i < drops.length; i++) {
     
     drops[i].display();
     
   }

   boy.display();


}







