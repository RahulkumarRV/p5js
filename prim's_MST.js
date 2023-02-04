var vertices = [];
var r = 20;

function setup() {
  createCanvas(400, 400);
  
}

function mousePressed(){
  let newvertice = createVector(mouseX, mouseY);
  vertices.push(newvertice);
}

function draw() {
  background(220);
  
  var reached = [];
  var unreached = [];
  var record = 10000;
  var rIndex , uIndex;
  
  
  for(let i=0; i<vertices.length; i++){
    unreached.push(vertices[i]);
  }
  
  reached.push(unreached[0]);
  unreached.splice(0,1);
  
  while(unreached.length > 0){
    var record = 10000;
    for(let i=0; i<reached.length; i++){

      for(let j=0; j<unreached.length; j++){
        var v1 = reached[i];
        var v2 = unreached[j];

        var d = dist(v1.x, v1.y, v2.x, v2.y);
        if(d < record){
          record = d;
          rIndex = i;
          uIndex = j;
        }
      }
    }
  stroke(140);
  strokeWeight(1);
  ellipse(reached[rIndex].x, reached[rIndex].y, r, r);
  ellipse(unreached[uIndex].x, unreached[uIndex].y, r, r);
  line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x,         unreached[uIndex].y);
  reached.push(unreached[uIndex]);
  unreached.splice(uIndex, 1); 
  }
  
}
