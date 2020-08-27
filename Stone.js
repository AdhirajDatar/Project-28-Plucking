class  STONE {
    constructor(x,y,r){
        var options = {isStatic:false,
                       friction:1,
                       restitution:0,
                       density:1.2 
                      }
        this.body = Bodies.circle(x, y,r,options);
        this.r = r
        this.image = loadImage("stone.png"); 
        World.add(world,this.body);   
    }
    display (){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.r*2,this.r*2);
    }
}