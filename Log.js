class Log{
    constructor(a,b,d,angle){
        var box_options ={
            'restitution': 0.8,
             'friction' : 1.4,
             'density' : 1
        }
        this.body = Bodies.rectangle(a,b,20,d,box_options);
        this.c=20;
        this.d=d;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle
        var dis = this.body.position;
        push();
        translate(dis.x,dis.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("green");
        fill("crimson");
        rect(0,0,this.c,this.d);
        pop();
    }
    }
