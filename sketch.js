const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33;
var box34,box35,box36,box37;
var radio1,radio2;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(2000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(900, 600, 1500, 20);
  

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1500,550,300);


  
  
  
  
  
  
 


  // first tower
  box1 = new Box(790,530,60,60);
  box7 = new Box(790,460,60,60);
  box8 = new Box(790,390,60,60);
  box9 = new Box(790,320,60,60);
  box10= new Box(790,250,60,60);
  box11= new Box(790,180,60,60);

  //second tower
  box2 = new Box(860,530,60,60);
  box6 = new Box(860,460,60,60);
  box12= new Box(860,390,60,60);
  box13= new Box(860,320,60,60);
  box14= new Box(860,250,60,60);
  box29= new Box(860,190,60,60);
  box30= new Box(860,130,60,60);
  

  
  //third tower
  box3 = new Box(930,530,60,60);
  box15= new Box(930,460,60,60);
  box16= new Box(930,390,60,60);
  box17= new Box(930,320,60,60);
  box31= new Box(930,260,60,60);


  //fourth tower
  box4 = new Box(1000,530,60,60);
  box18= new Box(1000,470,60,60);
  box19= new Box(1000,410,60,60);
  box20= new Box(1000,360,60,60);
  box21= new Box(1000,300,60,60);
  box22= new Box(1000,340,60,60);
  box23= new Box(1000,280,60,60);

  
  //fifth tower

  box5 = new Box(1070,530,60,60);
  box24= new Box(1070,470,60,60);
  box25= new Box(1070,410,60,60);
  box26= new Box(1070,350,60,60);
  box27= new Box(1070,290,60,60);
  box28= new Box(1070,230,60,60);

  //sixth tower

  box32 = new Box(1160,530,75,75);
  box33 = new Box(1160,465,75,75);
  box34 = new Box(1160,390,75,75);
  box35 = new Box(1160,315,75,75);
  box36 = new Box(1160,250,75,75);
  box37 = new Box(1160,175,75,75);
}

function draw() {
  background(bg);
  Engine.update(engine);
  

  


  

  //first tower
  push();
  fill("crimson");
  box1.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  pop();


  //second tower
  push();
  fill("turquoise");
  
  box2.display();
  box6.display();
  box12.display();
  box13.display();
  box14.display();
  box29.display();
  box30.display();
  pop();

  

  push();
  //third tower
  fill("lime");
  box3.display();
  box15.display();
  box16.display();
  box17.display();
  box31.display();  
  pop();

  push();
  //fourth tower
  fill("orange");
  box4.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  pop();
  


  push();
  //fifith tower
  fill("magenta");
  box5.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  pop();


  push();
//sixth tower
  fill("teal");
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  pop();



  hero.display();

  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
