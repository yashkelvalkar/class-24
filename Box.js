class B{
    constructor(a,b,c,d){
        var box_options ={
            'restitution': 0.8,
             'friction' : 1,
             'density' : 1
        }
        this.body = Bodies.rectangle(a,b,c,d,box_options);
        this.c=c;
        this.d=d;
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
        stroke("yellow");
        fill("white");
        rect(0,0,this.c,this.d);
        pop();
    }
    }








