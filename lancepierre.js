class Lancepierre {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      lenght: 10,
      stiffness: 0.9,
    };
    this.pointB = pointB;
    this.corde = Constraint.create(options);
    World.add(world, this.corde);
  }
  attacher(body) {
    this.corde.bodyA = body;
  }

  lancer(){
  this.corde.bodyA=null


  }

  display() {
    var pointA = this.corde.bodyA.position;
    var pointB = this.pointB;
    push();
    strokeWeight(7);

    line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
    pop();
  }
}
