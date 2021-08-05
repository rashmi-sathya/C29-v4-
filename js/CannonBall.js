class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
//create a circle body
//load the image
    World.add(world, this.body);
  }

  shoot() {
    
    //set the angle of ball to cannon
    //set static value to the body
    //set the velocity for the ball to make the ball to move
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//display the image
    pop();

    }
  }

