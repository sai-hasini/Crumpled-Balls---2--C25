class Dustbin {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this. wallThickness = 20;
        this.angle = 0;
        this.image = loadImage("Dustbin.png")

        this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic : true})

        this.leftwallbody = Bodies.rectangle(this.x -this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic : true})
        Matter.Body.setAngle(this.leftwallbody,this.angle)

        this.rightwallbody = Bodies.rectangle(this.x + this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic : true})
        Matter.Body.setAngle(this.rightwallbody,-1*this.angle)

        World.add(world,this.bottombody);
        World.add(world,this.leftwallbody);
        World.add(world,this.rightwallbody);
    }
display(){
    var posbottom = this.bottombody.position
    var posleft = this.leftwallbody.position
    var posright = this.rightwallbody.position

    push()
    translate(posleft.x,posleft.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(204,153,255)
    stroke("black")
    rotate(this.angle)
    pop()

    push()
    translate(posright.x,posright.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(204,153,255)
    stroke("black")
    rotate(-1*this.angle)
    pop()

    push()
    translate(posbottom.x,posbottom.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(204,153,255)
    stroke("black")
    image(this.image,-100,-150,this.dustbinWidth - 10,this.dustbinHeight + 50)
    pop()
}

}