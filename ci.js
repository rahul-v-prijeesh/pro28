class circle {
    constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.x=x
      this.y=y
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      
        var pos =this.body.position;
     push() 
     translate (pos.x,pos.y);
      
      //ellipseMode(RADIUS);
      fill("brown");
      ellipse(0, 0, this.radius*2,this.radius*2);
      pop ()

    }
  };
 
