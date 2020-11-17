class Bird{
    constructor(a,b){
        var box_options ={
            'restitution': 0.5,
             'friction' : 1,
             'density' : 1.5
        }
        this.body = Bodies.rectangle(a,b,50,50,box_options);
        this.c=50;
        this.d=50;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle
        var dis = this.body.position;
        dis.x=mouseX;
        dis.y=mouseY;
        push();
        translate(dis.x,dis.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("blue");
        fill("white");
        rect(0,0,this.c,this.d);
        pop();
    }
    }
