const chars = ["▒","░","▒"," ","▓","█"]; //

let camera;
const vScale = 6;

const sampleSize = 5;
const camWidth = 400;
const camHeight = 400;
// const camHeight = 280;

const maxColor = 765;// 255*3
let proportion = camWidth / camHeight;
let scaleToCam;


const shapes = [];

function preload(){
  // fontRegular = loadFont('font/BallPill-regular.otf');

  // let dataList = ['data/selfy_1.svg','data/selfy_2.svg','data/selfy_3.svg','data/selfy_4.svg', 'data/selfy_5.svg', 'data/selfy_6.svg', 'data/selfy_7.svg'];
  // let dataList = ['data/selfy_1.svg','data/selfy_3.svg','data/selfy_4.svg', 'data/selfy_5.svg', 'data/limestone_1.svg', 'data/13.svg'];
  let dataList = ['data/stripe2_k.svg','data/stripe2_r.svg','data/stripe2_g.svg','data/stripe3_k.svg','data/stripe3_r.svg','data/stripe3_g.svg','data/check2_k.svg','data/check2_r.svg','data/check2_g.svg'];
  // let dataList = ['data/oval_g_k.svg'];

  let randomData = random(dataList); // select random word

  shapes.push(loadImage(randomData));
  // shapes.push(loadImage("data/selfy_3.svg"));
  shapes.push(loadImage("data/fill_K.svg"));
  shapes.push(loadImage("data/fill_K.svg"));
  shapes.push(loadImage("data/stripe1_k.svg"));
  shapes.push(loadImage("data/fill_W.svg"));
}

function setup() {
	if (windowHeight < windowWidth) {
		createCanvas(round(windowHeight * proportion), windowHeight);
		scaleToCam = width/camWidth;
	} else {
		createCanvas(windowWidth, round(windowHeight / proportion));
		scaleToCam = height/camHeight;
	}

  fullscreen();

	// textAlign(CENTER, CENTER);
	// textSize(sampleSize);
	// textFont("monotype");

  // canvas.parent('canvas-parent');

  // var canvas = createCanvas(windowWidth, windowHeight);
  // scaleToCam = windowWidth/camWidth, windowHeight/camHeight;

	camera = createCapture(VIDEO);
	camera.size(camWidth, camHeight);
	camera.hide();
}

function draw() {
  translate(width,0);
  scale(-1, 1);
  blendMode(BLEND);
	camera.loadPixels();
	// background(0);
	// fill(0,0,0);

	scale(scaleToCam);

	for (let y = 0; y < camHeight; y += vScale) {
		for (let x = 0; x < camWidth; x += vScale) {
			const i = ((y * camWidth) + x) * 4;
			const r = camera.pixels[i];
			const g = camera.pixels[i + 1];
			const b = camera.pixels[i + 2];
			// let index = floor((1 - (r+g+b) / maxColor) * (chars.length-1));
      // text(chars[index], x, y);

      let gradientToIndex = floor((1 - (r+g+b) / maxColor) * (shapes.length-1));
      image(shapes[gradientToIndex], x, y, vScale, vScale);

		}
	}

  // var currentYear = year();
  // var currentMonth = month();
  // var currentDay = day();
  // var currentHour = hour();
  // var currentMinute = minute();
  // var currentSecond = second();
  //
  // var currentDate = currentYear + ' ' + nf(currentMonth, 2) + '-' + nf(currentDay, 2);
  // var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);
  // blendMode(DIFFERENCE);
  // fill(255);
  // noStroke();
  // textFont(fontRegular);
  // textSize(24);
  // textAlign(LEFT, BASELINE);
  // text(currentDate  + ' ' + currentTime, 2, 0);

}

function keyPressed(){
  //if the key is a s
  if(key == 'p'){
    //save out to a file
    save('InfiniteFigures.png');
  }
}
