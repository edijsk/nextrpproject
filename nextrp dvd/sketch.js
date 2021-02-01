let x;
let y;

let xspeed;
let yspeed;

let nextrp;

let r,g,b;

function setup() 
{
  createCanvas(800, 600);
  nextrp = loadImage("nextrp_logonew.png");
  x = random(width);
  y = random(height);
  xspeed = 5;
  yspeed = 5;
  pickColor();
}

function pickColor() {
    r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

  function draw()  
{
  background(0);
  tint(r, g, b);
  image(nextrp, x, y);


  x = x + xspeed;
  y = y + yspeed;

  if (x + nextrp.width >= width) {
    xspeed = -xspeed;
    x = width - nextrp.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + nextrp.height >= height) {
    yspeed = -yspeed;
    y = height - nextrp.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}