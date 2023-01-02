function Bubble (x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255);
  this.dead = false;
  
  this.display = function() {
    stroke(0);
    fill(this.col);
    ellipse(this.x, this.y, 25, 25);
  }
  
  this.clicked = function() {
    
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < 25){
      this.dead = true;
    }
  }
  
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
