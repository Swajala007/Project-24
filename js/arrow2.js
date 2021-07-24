class Arrow2 {
    constructor(x, y) {
        var op = {
            restitution:-0.5,
            friction:-1.5,
            density:-1.5,
            isStatic:true
        }
      
     
    this.image = loadImage("assets/arrow.png");
  this.width = 50;
  this.height = 10;

    this.body = Bodies.rectangle(850,100,this.width,this.height,op );
    World.add(world, this.body);

    }

    shoot(){
        var velocity = p5.Vector.fromAngle(computerArcher.angle)
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
        Matter.Body.setAngle(this.body,-PI/5);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       // imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }