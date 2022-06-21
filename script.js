function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(2); // Don't modify this line
}

function draw() {
  borderWeight = random(11);
  strokeWeight(borderWeight);
  stroke(random(255));
  fill(random(256), random(256), random(256));
  variableA = random(width);
  variableB = variableA*height/width
  variableC = random(0,100);
  ellipse(variableA, variableB, variableC);
}