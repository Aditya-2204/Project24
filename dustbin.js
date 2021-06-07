class Dustbin{
    constructor(x1, y1, x2, y2, x3, y3){
        this.body = Bodies.rectangle(x1, y1);
        this.width = 10;
        this.height = 50;
        World.add(world, this.body)
        this.body = Bodies.rectangle(x2, y2);
        this.width = 10;
        this.height = 50;
        World.add(world, this.body)
        this.body = Bodies.rectangle(x3, y3);
        this.width = 10;
        this.height = 50;
        World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(x,y,radius)
        rotate(angle);
        pop();
    }
}