const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,bodies,constraint;
var ground;
var hexagon, slingshot;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    


    ground = new Ground(600,height,1200,20);
    //level one
    block1 = new Blocks(330,145,30,40);
    block2 = new Blocks(360,145,30,40);
    block3 = new Blocks(390,145,30,40);
    block4 = new Blocks(420,145,30,40);
    block5 = new Blocks(450,145,30,40);
    block6 = new Blocks(480,145,30,40);
    block7 = new Blocks(510,145,30,40);
    //level two
    block8 = new Blocks(330,235,30,40);
    block9 = new Blocks(360,235,30,40);
    block10 = new Blocks(390,235,30,40);
    block11 = new Blocks(420,235,30,40);
    block12 = new Blocks(450,235,30,40);
    //level three
    block13 = new Blocks(360,195,30,40);
    block14 = new Blocks(390,195,30,40);
    block15 = new Blocks(420,195,30,40);
    //top
    block16 = new Blocks(390,155,30,40);
    
    hexagon = new Hexgon(200,50);
    slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){AS
   Engine.update(engine);

   noStroke();
        textSize(35)
        fill("Red")
        text("Score  " + score, 750, 40)
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    hexagon.display();
    ground.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.place(hexagon.body);
        
    }

}
function place(){
    var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "Main/bg1.png";
    }
    else{
        bg = "Main/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
function score(){

    if(this.visiblity<0 && this.visiblity >-105){
        score++
    }
    block1.score
    block2.score
    block3.score
    block4.score
    block5.score
    block6.score
    block7.score
    block8.score
    block9.score
    block10.score
    block11.score
    block12.score
    block13.score
    block14.score
    block15.score
    block16.score
}