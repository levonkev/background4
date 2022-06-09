var mode; // determine whether app has started, intro screen
var yset = 0.0;


var points = []; //where points spawn

var jit = 0.01; //jitter control var



//colour values
var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

var density = 40; //line amounts

function setup() {


  createCanvas(windowWidth, windowHeight);
 background(250);
  noiseDetail(2);
  angleMode(DEGREES);
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    //starting points for lines, create vectors + make them random to remove the grid-like structure - i.e creates points
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p); //adds vector to points array
    }
  }

  //shuffle array to randomize
  shuffle(points, true);
  //colour values
  r1 = (166)
  r2 = (166);
  g1 = (166);
  g2 = (166);
  b1 = (166)
  b2 = (166);

  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(250);
}
  


function draw() {
  

    background(250,8);
  
  if (mouseIsPressed == true) {
   jit =0.10; // White
  }
  else {
    jit =0.01;   // Black
  }

   

    if (frameCount <= points.length) {
      //fameCount spawning points diff time
      var max = frameCount; 
    } else {
      var max = points.length;
    }

    for (var i = 0; i < max; i++) {
      // control colours
      var r = map(points[i].x, 0, width, r1, r2);
      var g = map(points[i].y, 0, width, g1, g2);
      var b = map(points[i].x, 0, width, b1, b2);

      fill(r, g, b);

      
      var angle = map(
        noise(points[i].x * jit, points[i].y * jit),0,1,0,720); //Perlin noise command re-mapped to slider i.e show/display 

      
      points[i].add(createVector(cos(angle), sin(angle) *2));
      //vector added to each point based on angle i.e controls movement of the vector with a speed variable

      
      noStroke();
      circle(points[i].x, points[i].y, 1);
    }
  
}



