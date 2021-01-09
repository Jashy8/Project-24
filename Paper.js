class Paper {
    constructor(x,y,radius) {
      var options = {
        'isStatic': false,
        'restitution': 0.3,
        'friction': 0.5,
        'density': 1.2
      }
      this.radius = radius;
      this.body = Matter.Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(255);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };