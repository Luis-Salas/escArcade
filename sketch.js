// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM
var stars = [];
var img;

var speed;
function preload(){
  img = loadImage('https://lh3.googleusercontent.com/5bCDY4WPvnOXtd3xT40JFPPlw8YzDQUzogIDpQKjZ8qaUntswddxqGUpVQIGOvgSNjrqkKgDqk14iv2h6amMZEjaeSGpbTa-PFeDgIlFe5ciOWwzw6fbpwbGLhxTAx6h0e1-Od8Ra4SxP9tCl13rpMYwu8vlMLw3zGFbywaHTXXezD9h8f9_TgjZj0X0L_jcnZTA-RUKsDozRbHu0bbGztIVoY_CXaCnh4xOSwI7Ho8tIVtF80MSQc3X0y3fkW71l_sT8IlEMVW3F2jP_t97xPRZnD4_Svh2h-cbs3g6dNy5R0YH4E8t_g0-ZYMaxG-UdDJHWsb3gRdVVCIjPybZ9mDwP3MbXWu6IRtvcn-qvfQedMcDjuWEDp8ng-rrZw3phhM0cqXrtOcoLP7OH-BvVAbovWFtoLc_yAOPMLslOlmWxuvsLNtIst3hAQ--eqYzPc136TkidxaA_ED_51_8GPby2Pye-yBNLBfZ632X62NTcLV07nOswQOEmxOQpukff4GZsBqpF6GolJJ2HwftiDyej-sRIa64MzVFjWESdKffuAPpRYcRQiA-zEMKSb6yTGiSPTDKesgzugyTpJLP95lYT0pgFAnT51nQC4ONVlveClY3Y1xQYzqZZnr3XZXQkSy9xa1G62N2Aat-_IfD7QpHpfdqJMjKAPuvRU8YDMl6bQ=w1500-h497-no')
}

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
	textAlign(CENTER);
	textSize(40);
	text('Welcome to', -135, 10);
	fill(0, 102, 153);
  imageMode(CENTER);
  image(img, 100, 0, 240, 80);

}
