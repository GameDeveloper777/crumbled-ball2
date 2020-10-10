class paperClass{
    constructor(x, y, radius, angle) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("Sprites/paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("blue");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
}