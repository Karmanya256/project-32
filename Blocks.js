class Blocks  {
    constructor(x, y, width, height){
      var option = {
        'restitution':0.4,
        'friction':0.0,
        //isStatic : true
      }
      
      
   
    this.visiblity = 225;
    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        thist.height = height;
        World.add(world, this.body);
    }
        display(){
          if(this.body.speed<3){var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(this.image, 0, 0, this.width, this.height);
            pop();

          }else{
            world.remove(world,this.body);
            push();
            this.visiblity = this.visiblity-5
            pop();
          
        }
      }
        }
    
      
   
  
