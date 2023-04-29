const chars = ["▒","░","▒"," ","▓","█"]; //

let camera;
const sampleSize = 10;
const camWidth = 400;
const camHeight = 225;
const maxColor = 765;// 255*3
let proportion = camWidth / camHeight;
let scaleToCam;

function setup() {
	if (windowHeight < windowWidth) {
		createCanvas(round(windowHeight * proportion), windowHeight);
		scaleToCam = width/camWidth;
	} else {
		createCanvas(windowWidth, round(windowHeight / proportion));
		scaleToCam = height/camHeight;
	}

	textAlign(CENTER, CENTER);
	textSize(sampleSize);
	textFont("monotype");

	camera = createCapture(VIDEO);
	camera.size(camWidth, camHeight);
	camera.hide();
}

function draw() {
	camera.loadPixels();
	background(255);
	fill(0,0,0);
	scale(scaleToCam);

	for (let y = 0; y < camHeight; y += sampleSize) {
		for (let x = 0; x < camWidth; x += sampleSize) {
			const i = ((y * camWidth) + x) * 4;
			const r = camera.pixels[i];
			const g = camera.pixels[i + 1];
			const b = camera.pixels[i + 2];
			let index = floor((1 - (r+g+b) / maxColor) * (chars.length-1));
			text(chars[index], x, y);
		}
	}
}
