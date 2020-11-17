class Pig{
    constructor(a,b){
        var box_options ={
            'restitution': 0.8,
             'friction' : 0.3,
             'density' : 1
        }
        this.body = Bodies.rectangle(a,b,50,50,box_options);
        this.c=50;
        this.d=50;
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
        stroke("black");
        fill("dimGray");
        rect(0,0,this.c,this.d);
        pop();
    }
    }
