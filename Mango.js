class  MANGO {
    constructor(x,y,r){
        var options = {isStatic:true,
                       friction:1,
                       restitution:0, 
                      }
        this.body = Bodies.circle(x, y,r,options);
        this.radius = r
        this.image = loadImage("mango.png"); 
        World.add(world,this.body);   
    }
    display (){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.radius,this.radius);
    }
}