//CREATE THE CLASS FOR PLAYER ARROW
class PlayerArrow {
//CREATE THE CONSTRUCTOR
constructor(x, y, width, height) {
//DECLARE THE BEHAVIOUR OF THE OBJECT(s)
var options = {
restitution: 0.8,
friction: 1.0,
density: 1.0,
isStatic: true
};
//DEFINE PROPERTIES
this.width = width;
this.height = height;
//CREATE THE BODY FOR THE OBECT(s)
this.body = Bodies.rectangle(x, y, this.width, this.height, options);
//LOAD THE IMAGE FOR THE OBJECT(s)
this.image = loadImage("./assets/arrow.png");
//LOAD AN ARRAY FOR THE TRAJCTORY
this.trajectory = [];
//ADD THE OBJECT(s) IN THE World
World.add(world, this.body);
}
//FUNCTION TO SHOOT THE OBJECT(s)
shoot(archerAngle) {
//DECLARE A SAMPLE VARIABLE WITH MENTIONING THE ANGLE
var velocity = p5.Vector.fromAngle(archerAngle);
//MULTIPLY THE VELOCITY
velocity.mult(20);
//SET THE STATIC STATE OF THE OBJECT(s)
Matter.Body.setStatic(this.body, false);
//SET THE VELOCITY OF THE OBJECT(s)
Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
}
//FUNCTION TO DISPLAY THE OBJECT(s)
display() {
//DECLAR A SAMPLE VARIABLE
var pos = this.body.position;
//DECLARE THE ANGLE
var angle = this.body.angle;
//FUNCTION TO STORE THE NEW VALUES
push();
//TRANSLATE THE REQUIRED VALUES
translate(pos.x, pos.y);
//ROTATE THE ANGLE
rotate(angle);
//DEFINE IMAGE MODE
imageMode(CENTER);
//ASSIGN THE IMAGE
image(this.image, 0, 0, this.width, this.height);
//FUNCTION TO GO BACK TO THE OLD VALUES
pop(); 
//CONDITION TO MAKE THE OBJECT VISIBLE
if (this.body.velocity.x > 0 && this.body.position.x > 400) {
//DECLARE AN ARRAY FOR ITS POSITION
var position = [this.body.position.x, this.body.position.y];
//FUNCTION TO STORE NEW VALUES FOR TRAJECTORY
this.trajectory.push(position);
}
//CREATE THE LOOP FOR TRAJECTORY
for (var i = 0; i < this.trajectory.length; i++) {
fill("white");
ellipse(this.trajectory[i][0], this.trajectory[i][1], 5, 5);
}
}
}
