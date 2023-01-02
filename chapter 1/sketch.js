let Bubbles =  [];



function setup() {
  createCanvas(400, 400);
  for(let i = 0; i< 10; i++){
    let x  = random(width);
    let y = random(height);
    Bubbles[i] = new Bubble(x, y)
    Bubbles[i].display();
  }
}

function mousePressed(){
  for(let i=0; i<Bubbles.length; i++){
    Bubbles[i].clicked();
    if(Bubbles[i].dead){
      Bubbles.splice(i, 1);
    }
  }
}

function mouseDragged(){
  let x  = mouseX;
  let y = mouseY;
  Bubbles.push(new Bubble(x, y))
}

function draw() {
  background(220);
  for(let i = 0; i< Bubbles.length; i++){
    Bubbles[i].move();
    Bubbles[i].display();
  }
  
}
