class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, {options,isStatic:false});
      this.width = width;
      this.height = height;
      this.visiblity = 255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3){
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
      }
      else{
  
        World.remove(world,this.body)
       
        push();
        this.visiblity = this.visiblity-5;
        tint(255,this.visiblity);
        translate(pos.x, pos.y);
        rotate(angle);
      
        pop();
      }

      
     
    }
  };
  