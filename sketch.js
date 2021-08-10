//DECLARE CONSTANTS FROM "matter.js"
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//DECLARE NECESSARY VARIABLES
var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var arrow;

//DECLARE AN ARRAY FOR EACH, PLAYER ARROWS, COMPUTER ARROWS
var playerArrows = [];
var computerArrows = []

//FUNCTION TO PRELOAD THE IMAGE(s)
function preload(){
//LOAD THE IMAGE FOR BACKGROUND
backgroundImage = loadImage("./assets/background.gif");
}

//FUNCTION TO SETUP THE GAME
function setup() {
//CREATE THE CANVAS OF REQUIRED SIZE
canvas = createCanvas(windowWidth-10, windowHeight-10);

//CREATE THE ENGINE
engine = Engine.create();
//ADD "world" IN ENGINE
world = engine.world;

//CREATE THE PLAYER BASE
playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
//CREATE THE PLAYER
player = new Player(285, playerBase.body.position.y - 153, 50, 180);
//CREATE THE PLAYER ARCHER
playerArcher = new PlayerArcher(340, playerBase.body.position.y - 180, 120, 120);

//CREATE THE COMPUTER BASE
computerBase = new ComputerBase(width - 300, random(450, height - 300), 180, 150);
//CREATE THE COMPUTER PLAYER
computer = new Computer(width - 280, computerBase.body.position.y - 153, 50, 180);
//CREATE THE COMPUTER ARCHER
computerArcher = new ComputerArcher(width - 340, computerBase.body.position.y - 180, 120, 120);
}

//FUNCTION TO DRAW THE GAME
function draw() {
//SET A SPECIFIC IMAGE OF BACKGROUND
background(backgroundImage);

//UPDATE THE ENGINE
Engine.update(engine);

//WRITE THE NECESSARY TEXT
fill("#FFFF");
textAlign("center");
textSize(40);
text("EPIC ARCHERY", width / 2, 100);

//DISPLAY PLAYER BASE 
playerBase.display();
//DISPLAY PLAYER
player.display();
  
//DISPLAY COMPUTER BASE
  computerBase.display();
//DISPLAY COMPUTER PLAYER
computer.display();
  
//DISPLAY PLAYER ARCHER
playerArcher.display();
//DISPLAY COMPUTER ARCHER
computerArcher.display()

//LOOP TO CREATE ARROWS FOR THE PLAYER
for (var i = 0; i < playerArrows.length; i++) {
//CALL THE FUNCTION WITH RESPECT TO PLAYER ARROWS
showArrows(i, playerArrows);
}
}

//FUNCTION TO CREATE AN ARROW
function keyPressed() {
//CONDITION TO CREATE AN ARROW WHEN SPACE KEY IS PRESSED
if(keyCode === 32){
//CREATE AN ARROW OBJECT AND SHOOT IT FROM THE ANGLE OF PLAYER ARCHER
var posX = playerArcher.body.position.x;
var posY = playerArcher.body.position.y;
//DECLARE ANGLE WITH A SPECIFIC VALUE
var angle = playerArcher.body.angle+PI/2;
//CREATE THE ACTUAL OBJECT
var arrow = new PlayerArrow(posX, posY, 100, 10);
//CREATE AN ARRAY FOR THE ARROW
arrow.trajectory = [];
//SET THE REQUIRED ANGLE OF THE BODY
Matter.Body.setAngle(arrow.body, angle);
//MAKE THE PLAYER ARROWS STORE THE VALUES OF ARROW
playerArrows.push(arrow);
}
}

//FUNCTION TO SHOOT THE ARROW 
function keyReleased () {
//CONDITION TO SHOOT THE ARROW WHEN SPACE KEY IS PRESSED
if(keyCode === 32){
//CALL SHOOT FUNCTION FOR ARROWS IN THE ARRAY 
if (playerArrows.length) {
var angle = playerArcher.body.angle+PI/2;
playerArrows[playerArrows.length - 1].shoot(angle);
}
}
}

//DISPLAY ARROW AND TRAJECTORY
function showArrows(index, arrows) {
arrows[index].display();
}
