
var stars = [];
var img;
var speed;
function preload(){
  img = loadImage('logo.png')
}
console.log(screen.width)

function setup() {
	myCanvas = createCanvas(screen.width, screen.height);
  myCanvas.parent('starfield');
	for (var i = 0; i < 800; i++) {
		stars[i] = new Star();
	}

}

function draw() {
	speed = map(20, 0, 300, 0, 50);
	background(0);
	translate(width / 2, height / 2);
	for (var i = 0; i < stars.length; i++) {
		stars[i].update();
		stars[i].show();
	}
  if(screen.width > 440){
    textAlign(CENTER);
    textSize(40);
    text('Welcome to', -135, 10);
    fill(0, 102, 153);
    imageMode(CENTER);
    image(img, 100, 0, 240, 80);
  }
  else{
    textAlign(CENTER);
    textSize(40);
    text('Welcome to',0 , -40);
    imageMode(CENTER);
    image(img, 1, 30, 240, 80);
  }
}
