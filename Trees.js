class  TREE {
    constructor(x,y){
        var options = {isStatic:true}
        this.body = Bodies.rectangle(x, y,400,400,options);
        this.width= 400;
        this.height= 400;
        this.image = loadImage("tree.png");    
    }
    display (){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.width,this.height);
    }
}