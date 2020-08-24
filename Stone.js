class  STONE {
    constructor(x,y){
        var options = {isStatic:false,
                       friction:1,
                       restitution:0,
                       density:1.2 
                      }
        this.body = Bodies.circle(x, y,30,options);
        this.radius = 30
        this.image = loadImage("stone.png"); 
        World.add(world,this.body);   
    }
    display (){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.radius,this.radius);
    }
}