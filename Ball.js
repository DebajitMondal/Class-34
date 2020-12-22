class Ball{
    constructor(x,y,width,height,angle) {
      var options = {
        
        density: 0.8,
        frictionAir: 0.005
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body) 
      var pos1 =this.body.position;
      var angle = this.body.angle;
      
      push()
      translate(pos1.x,pos1.y)
      rotate(angle)
      rectMode(CENTER);
      fill("red");
      ellipse(0,0, this.width, this.height);
      pop()
      
    }
  };
