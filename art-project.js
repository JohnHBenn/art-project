var num = 2000; //makes the number of copys
var ax = new Array(num);
var ay = new Array(num);
var bx = new Array(num);
var by = new Array(num);
var x = new Array(num);
var y = new Array(num);
var i;//represents each line

var magnet = 50; // makes the things kinda fade as they come
var rad = 0.1; // makes the circles bigger or smaller
var rce = 0.85;// makes the circles come at a gradual race

function setup(){
  createCanvas(windowWidth, windowHeight); // makes the canvas so that it fits the whole screen
  stroke(200, 0, 30) // makes the color of the lines
  background(0);// makes the background black
  blendMode(ADD);// makes the center of which your mouse is a color that is combined with the color that you set the stroke to
  for(i = 0; i < num; i++ ){//the "for" command makes a loop command for what ever number "num" is
    x[i] = random(width);// makes the position of the circles
    y[i] = random(height);
    ax[i] = 0;
    ay[i] = 0;
    bx[i] = 0;
    by[i] = 0;
  }
}

function draw(){
  for(i = 0; i < num; i++){
    var distance = dist(mouseX, mouseY, x[i], y[i]);//makes the circles move
    if (distance > 3){
      ax[i] = magnet * (mouseX - x[i]) / (distance * distance);
      ay[i] = magnet * (mouseY - y[i]) / (distance * distance);
    }
    bx[i] += ax[i];//means bx[i]=bx[i]+ax[i]
    by[i] += ay[i];

    bx[i] = bx[i] * rce;
    by[i] = by[i] * rce;

    x[i] += bx[i];
    y[i] += by[i];

    var spd = dist(0, 0, bx[i], by[i]);
    var r = map(spd, 0, 5, 0, 255);
    var g = map(spd, 0, 5, 64, 255);
    var b = map(spd, 0, 5, 128, 255);
    fill(r, g, b, 00);
    ellipse(x[i], y[i], rad, rad);
  }
}
