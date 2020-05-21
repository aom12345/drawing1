var sw=1;
var col1=0;
var col2=0;
var col3=0;
function setup() {
  createCanvas(400,400);
  //database=firebase.database();
  var form=new Form();
  form.display;
} 
function draw() {
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    sw =sw-1;
   col1=random(0,255);
   col2=random(0,255);
   col3=random(0,255);
  } else if (keyCode === RIGHT_ARROW) {
    sw =sw+1;
    col1=random(0,255);
   col2=random(0,255);
   col3=random(0,255);
  }
 else if (keyCode === UP_ARROW) {
  col1=random(0,255);
  col2=random(0,255);
  col3=random(0,255);
  }
  else if (keyCode === DOWN_ARROW) {
    col1=random(0,255);
    col2=random(0,255);
    col3=random(0,255);
  }
} 
function mouseDragged() {
  if(draw!=="after"){
    strokeWeight(sw);
    stroke(col1,col2,col3);
    fill(col1,col2,col3);
  line(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(0)
  fill(0)
  stroke(0)
  text("PRESS SIDE AROW KEYS FOR BRUSH THICKNESS",100,30);
  text("PRESS ANY AROW KEY FOR BRUSH COLOUR",100,10);
  // prevent default
  return false;
}
}