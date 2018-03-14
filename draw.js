
var seeds = [];

function getRandomColorVal() {
  return (Math.floor(Math.random()*255));
}

var colors = [];

function setup() {
  createCanvas(600, 600);

  for (var k=0; k < 452; k++) {
    var x = Math.random() * width;
    var y = Math.random() * height;
    seeds.push({x: x, y: y});

    // Random colors:
    // var triad = [getRandomColorVal(), getRandomColorVal(), getRandomColorVal()];

    // Unicolor:
    // var triad = [100, 100, 100];

    // Color based on position:
    var xNorm = x / width * 255;
    var yNorm = y / height * 255;
    var triad = [0, xNorm, yNorm];

    // Color brick-red:
    // var triad = [170, 51, 17];

    colors.push(triad);
  }

  // Loop through every pixel:
  // Example: seeds = [{x: 20, y: 50}, {x: 200, y: 350}, {x: 120, y: 230}, {x: 70, y: 250}, {x: 230, y: 190} ];
  for (var i=0; i < width; i++) {
    for (var j=0; j < height; j++) {
      getMinPoint(i, j);
    }
  }
}

function getMinPoint(x, y) {
  var distances = [];
  for (var i=0; i < seeds.length; i++) {
    distances.push(dist(x, y, seeds[i].x, seeds[i].y));
  }
  var minimum = min(distances);
  var pos = distances.indexOf(minimum);

  distances.splice(pos, 1);
  var newMin = min(distances);
  var diff = newMin - minimum;

  noStroke();
  rect(x, y, 1, 1);
  if (diff < 6) {
    // fill('rgb(211, 211, 211)');
    fill(colors[pos]);
  } else {
    fill(colors[pos]);
  }
}

function isPrime(n) {

}
