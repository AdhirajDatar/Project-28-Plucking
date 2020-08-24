class SHOT{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 20
       } 
        this.SLING = Matter.Constraint.create(options);
        World.add(world, this.SLING);
    }

    attach(bodyA){
        this.SLING.bodyA = bodyA;
    }

    chiddiyaUdd(){
        this.SLING.bodyA = null;
    }

    display(){
        if (this.SLING.bodyA){
        var PosA = this.SLING.bodyA.position;
        var PosB = this.SLING.pointB;
        line(PosA.x,PosA.y,PosB.x,PosB.y);
        }


    }
    
}