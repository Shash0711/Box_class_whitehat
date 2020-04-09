class Ground{
    constructor(x,y,width,height) {
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display () {
        var grd = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(grd.x,grd.y,this.width,this.height);

    }
}