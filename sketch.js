const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world
var box1;
function setup() {
  createCanvas(1300,600);
  engine = Engine.create()
  world = engine.world;
  // Createing Ground
  ground = new Ground(650,590,1300,20)
  // Createing Box
  box1= new Box(580,570,50,50)
  box2= new Box(580,520,50,50)
  box3= new Box(580,470,50,50)
  box4= new Box(580,420,50,50)
  box5= new Box(580,370,50,50)
  box6= new Box(580,320,50,50)
  box7= new Box(580,270,50,50)
  box8= new Box(580,220,50,50)
  box9= new Box(580,170,50,50)
  box10= new Box(580,120,50,50)
  box11= new Box(670,570,50,50)
  box12= new Box(670,520,50,50)
  box13= new Box(670,470,50,50)
  box14= new Box(670,420,50,50)
  box15= new Box(670,370,50,50)
  box16= new Box(670,320,50,50)
  box17= new Box(670,270,50,50)
  box18= new Box(670,220,50,50)
  box19= new Box(760,570,50,50)
  box20= new Box(760,520,50,50)
  box21= new Box(760,470,50,50)
  box22= new Box(760,420,50,50)
  box23= new Box(760,370,50,50)
  box24= new Box(760,320,50,50)
  box25= new Box(760,270,50,50)
  box26= new Box(760,220,50,50)




  //Createing ball
  ball1 = new Ball(300,200,50,50)
  // Createing Rope to make constraint between ball1 and rope
  rope = new Rope(ball1.body,{x:400 , y: 50})


}

function draw() {
  background("white");
  Engine.update(engine)
  // Displaying variable
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()

  ball1.display()
  rope.display()


}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})

}