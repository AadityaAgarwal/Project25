class Ground{

    constructor(){

        var st= {isStatic: true}

       this.ground=Matter.Bodies.rectangle(600,690,1200,20,st);
        
        Matter.World.add(world, this.ground);
    }

    display(){

        rectMode(CENTER);
       
        rect(this.ground.position.x,this.ground.position.y,1200,20);
    }
}