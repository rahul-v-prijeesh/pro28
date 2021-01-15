const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const con = Matter.Constraint
var engine, world;

var conlog

var h1,h2,h3,h4,h5
var a1,a2,a3,a4,a5
var b2,b3,b4,b5;
var r1,r2



function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
   rectMode(CENTER)
   conlog=new Ground(400,200,200,50)
   b2=new Ground(440,200,20,20)
   b3=new Ground(480,200,20,20)
   b4=new Ground(360,200,20,20)
   b5=new Ground(320,200,20,20)
   
     a1=new circle(400,400,20)
     h1= new Chain(a1.body,conlog.body,0,-10)
    a2=new circle(440,400,20)
    h2=new Chain(a2.body,b2.body,0,-10)
    
    r1=Bodies.circle(500,400,20) 
   World.add(world,r1);
    h3=new Chain(r1,b3.body,0,-10)
    a4=new circle(360,400,20)
    h4=new Chain(a4.body,b4.body,0,-10)
    r2=Bodies.circle(320,400,20) 
    World.add(world,r2);
    h5=new Chain(r2,b5.body,0,-10)
    
}

function draw(){
   
   background(255);
    Engine.update(engine);
    //ellipse(a1.position.x,a1.position.y,20)
  /* r1.position.x =a3.x
    r1.position.y=a3.y*/
   
    conlog.display()
    h1.display();
    a1.display();
   
    h2.display();
    a2.display();
    
    h3.display();
    
    
    h4.display();
   
    h5.display();
    a4.display();
     ellipse(r1.position.x,r1.position.y,40)  
     ellipse(r2.position.x,r2.position.y,40)  
   KeyPressed();
  }
  function KeyPressed()
    {
     if(keyWentDown("RIGHT_ARROW"))
     {
      Matter.Body.applyForce(r1,r1.position,{x:0.03,y:-0.03})
     }
     if(keyWentDown("LEFT_ARROW"))
     {
      Matter.Body.applyForce(r2,r2.position,{x:-0.03,y:-0.03})
     }
    }