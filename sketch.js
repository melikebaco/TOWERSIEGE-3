const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground1,ground2,ground3;
var hexagon;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var score = 0;

function preload() {

}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,400,1200,20)
    ground2 = new Ground(600,300,250,10)
    ground3 = new Ground(1000,200,250,10)

    hexagon = new Hexagon(150,200,50,50)

    chain = new Chain(hexagon.body,{x:150,y:200})

    box1 = new Box(600,280,30,30);
    box2 = new Box(601,280,30,30);
    box3 = new Box(599,280,30,30);
    box4 = new Box(598,280,30,30);
    box5 = new Box(602,280,30,30);
    box6 = new Box(597,280,30,30);
    box7 = new Box(603,280,30,30);
    box8 = new Box(601,250,30,30);
    box9 = new Box(560,250,30,30);
    box10 = new Box(580,250,30,30);
    box11 = new Box(620,250,30,30);
    box12 = new Box(630,250,30,30);
    box13 = new Box(600,220,30,30);
    box14 = new Box(570,220,30,30);
    box15 = new Box(630,220,30,30);
    box16 = new Box(600,200,30,30);



    box17 = new Box(1000,180,30,30);
    box18 = new Box(999,180,30,30);
    box19 = new Box(998,180,30,30);
    box20 = new Box(1001,180,30,30);
    box21 = new Box(997,180,30,30);

    box22 = new Box(1000,160,30,30);
    box23 = new Box(1001,160,30,30);
    box24 = new Box(999,160,30,30);
    
    box25 = new Box(1000,140,30,30);



}


function draw(){
    background("grey");
    Engine.update(engine);

    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)

    ground1.display();
    ground2.display();
    ground3.display();

    hexagon.display();

    chain.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

}


function mouseDragged() {
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased() {
      chain.fly();
  }

  function keyPressed(){
      if(keyCode === 32){
          chain.attach(hexagon.body);
      }
  }