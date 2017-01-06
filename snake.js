function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  this.dir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
  
  this.collideSelf = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      var dLeft = dist(this.x, this.y, 0, this.y);
      var dTop = dist(this.x, this.y, this.x, 0);
      var dBot = dist(this.x, this.y, this.x, height);
      var dRight = dist(this.x, this.y, width, this.y);
      if (d < 1) {
        console.log("Starting over");
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
        window.alert("You have died");
      }
    }
  }
  
  this.collideWall = function() {
    var dLeft = dist(this.x, this.y, 0, this.y);
    var dTop = dist(this.x, this.y, this.x, 0);
    var dBot = dist(this.x, this.y, this.x, height-scl);
    var dRight = dist(this.x, this.y, width-scl, this.y);
    
    var isCollided = 0;
    
    if ( (dLeft < 1 && this.xSpeed === -1) ) {
      isCollided = 1;
    }
    else if ( (dRight < 1 && this.xSpeed === 1) ) {
      isCollided = 1;
    }
    else if ( (dTop < 1 && this.ySpeed === -1) ) {
      isCollided = 1;
    }
    else if ( (dBot < 1 && this.ySpeed === 1) ) {
      isCollided = 1;
    }
    
    if (isCollided) {
      console.log("You have hit a wall.");
      this.x = 0;
      this.y = 0;
      this.xSpeed = 1;
      this.ySpeed = 0;
      this.total = 0;
      this.tail = [];
      
      window.alert("You have died");
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.total - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(255);

    for (var i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    rect(this.x, this.y, scl, scl);
  }
}