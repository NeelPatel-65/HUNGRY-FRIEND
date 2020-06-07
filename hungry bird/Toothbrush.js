class Toothbrush extends Baseclass  {


constructor (x,y,height,angle) {

    super(x,y,20,height,angle);
    this.image = loadImage("sprites/toothbrush.png");
    Matter.Body.setAngle(this.body,angle);
   


}





}