class paper {
	constructor(x,y,r) {
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
  }
	display() {
			var paperpos = this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(252, 3, 223)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+30, this.r+30)
			pop()
  }
}