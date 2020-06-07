class Slingshot {

constructor(bodyA,pointB) {

var option = {

    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:10
}

this.sling1 = loadImage("sprites/sling1.png");
this.sling2 = loadImage("sprites/sling2.png");
this.sling3 = loadImage("sprites/sling3.png");

this.pointB = pointB;
this.sling = Constraint.create(option);
World.add(world,this.sling);


}

attach (body){

this.sling.bodyA = body;


}

fly() {

this.sling.bodyA = null;


}
display(){

 image(this.sling1,200,20);
 image(this.sling2,170,20);

    
  if (this.sling.bodyA){
      push();
    strokeWeight(4);


    stroke(48,22,8)
    line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y);
    line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y-3);
    image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30);
    pop();
    
}


    





}


}