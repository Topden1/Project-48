const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6;
var ball;
var bg;

function preload(){
    box1 = loadImage("assets/A.png");
    box2 = loadImage("assets/B.jpeg");
    box3 = loadImage("assets/C.jpeg");
    box4 = loadImage("assets/Byjuu.jpeg");
    box5 = loadImage("assets/SmoothWood.jpeg");
    box6 = loadImage("assets/SmoothWood1.jpeg"); 
 }

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3 = new Box(240, 200, 50, 60);
    box4 = new Box(240, 350, 50, 30);
    box5 = new Box(240, 300, 100, 100);
    box6 = new Box(250,100, 150, 20);
    ground = new Ground(200,height,400,20)

    var ball_options={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    world.add(world, ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground.display();

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    drawSprites();
}

function Score()
{
    if(ground.isTouching(ball))
    {
        score = score+1;
    }
    textFont("algoriam");
    textSize(30);
    fill("yellow");
    text("score:"+ score, 250, 50);
}

//For some reason the images kept on not showing so then I added assets/ but it still didn't work-
//This time I don't even know what happened. I tried without the pictures and added the ball and nothing happend and when I added the picture with its actual file which is .jpeg nothing happened still.
//So I instead did it without drawSprites and with drawSprites and it still didn't work can you help me?


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
  
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
      
      bg.addImage(bgImg);
      bg.scale = 1.3
    }
    else{
      
      bg.addImage(bgImg2);
      bg.scale = 1.5
      bg.x=200
      bg.y=200
    }
  
  }