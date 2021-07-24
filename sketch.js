const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1;
var base2;
var player1,player2;
var canvas,angle,angle1;
//var playerArcher;
var arrow,arrow2;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  
   //Create Player Base and Computer Base Object

  base1 = new Base1(100,300,200,200);
  base2 = new Base2(870,300,200,200);
  player1 = new Player(100,130,100,200);
  player2 = new Player(870,130,100,200);
  angle = -PI/4;
  angle1 = -PI/100;
  playerArcher = new PlayerArcher(80,145,120,120, angle);
  computerArcher = new ComputerArcher(837,70,120,120, angle1);
   arrow = new Arrow(playerArcher.x,playerArcher.y);
   arrow2 = new Arrow2(computerArcher.x,computerArcher.y);
   


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  fill("blue");
textSize(20);
text("USE ALL ARROW KEYS",450,120);

   //Display Playerbase and computer base 

   base1.display();
   base2.display();

   //display Player and computerplayer

   player1.display();
   player2.display();

   playerArcher.display();
   computerArcher.display();

   arrow.display();
   arrow2.display();
   

}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    arrow.shoot();
  }

  if(keyCode === LEFT_ARROW){
    arrow2.shoot();
  }
  
  
}


