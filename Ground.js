class G{
constructor(a,b,c,d){
    var ground_options ={
        isStatic: true
    }
    this.body = Bodies.rectangle(a,b,c,d,ground_options);
    this.c=c;
    this.d=d;
    World.add(world,this.body);
}
display(){
    var dis = this.body.position;
    fill("crimson");
    rectMode(CENTER);
    rect(dis.x,dis.y,this.c,this.d);
}
}
