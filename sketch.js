const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21,b22,b23,b24,b25;
var polygon,slingshot;


function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,690,1600,10);
    stand1 = new Ground(390,600,230,10);
    stand2 = new Ground(600,300,170,10);

    b1 = new Box(300,570,30,40);
    b2 = new Box(330,570,30,40);
    b3 = new Box(360,570,30,40);
    b4 = new Box(390,570,30,40);
    b5 = new Box(420,570,30,40);
    b6 = new Box(450,570,30,40);
    b7 = new Box(480,570,30,40);

    fill("red");
    b8 = new Box(330,530,30,40);
    b9 = new Box(360,530,30,40);
    b10 = new Box(390,530,30,40);
    b11 = new Box(420,530,30,40);
    b12 = new Box(450,530,30,40);

    fill("yellow");
    b13 = new Box(360,490,30,40);
    b14 = new Box(390,490,30,40);
    b15 = new Box(420,490,30,40);

    fill("green")
    b16 = new Box(390,450,30,40);

    fill("red");
    b17 = new Box(540,270,30,40);
    b18 = new Box(570,270,30,40);
    b19 = new Box(600,270,30,40);
    b20 = new Box(630,270,30,40);
    b21 = new Box(660,270,30,40);

    fill("yellow");
    b22 = new Box(570,230,30,40);
    b23 = new Box(600,230,30,40);
    b24 = new Box(630,230,30,40);

    fill("green");
    b25 = new Box(600,190,30,40);

    polygon = new Polygon(50,200,50);

    slingshot = new SlingShot(polygon.body,{x:60,y:600});

}

function draw(){
    background(255,144,84);
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    polygon.display();
    slingshot.display();

    polygon.debug = true;
    
    fill(0);
    textSize(20);
    text("Drag the hexagonal stone and release it, to launch it towards the blocks",100,20);
}

function mouseDragged(){

 
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }


function mouseReleased(){
    slingshot.fly();
   
    
}

function keyPressed(){
    if(keyCode === 32){
      slingshot.attach(polygon.body);
    }
}
