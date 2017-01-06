var snake;
var scl = 20;

var food;

function setup() {
  createCanvas(500, 500);
  snake = new Snake();
  frameRate(8);
  pickLocation();
  
}

function draw() {
  background(50);
  
  if (snake.eat(food) == true) {
    pickLocation();
  }
  
  snake.collideSelf();
  snake.collideWall();
  snake.update();
  snake.show();
  
  fill(255, 0, 0);
  rect(food.x, food.y, scl, scl);
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}