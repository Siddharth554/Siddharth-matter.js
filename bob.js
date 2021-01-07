class Bob
{
    constructor(x,y,r)
    {
        var options = 
        {
            restitution: 0.5,
            friction: 0.5,
            density: 0.5

        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x,y,r,options);

        World.add(world, this.body);

        
    }

    display()
   {
    
    push()
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(0, 0, this.r,this.r);
    pop()
    
   }
}