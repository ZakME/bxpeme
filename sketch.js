// TOP DOWN PLAYER

// Declare Global Variables
// SETUP FUNCTION - Runs once at beginning of program
let angle = 0;

let alien;

let graphics;

let love;



function setup() {
	createCanvas(windowWidth - 100, windowHeight - 100, WEBGL);
	// graphics = createGraphics(300, 300);
	//graphics.background(255);

	love = createGraphics(300, 300);
	// love.background(255, 100);
	love.fill(255);
	love.textAlign(CENTER);
	love.textSize(64);
	love.text('yoink', 150, 150);
}

function draw() {
	background(0);

	// graphics.fill(255, 0, 255);
	// graphics.ellipse(mouseX, mouseY, 20);
	//   ambientLight(100);
	directionalLight(255, 255, 255, 0, 0, 1);
	rotateX(angle);
	rotateY(angle * 1.3);
	rotateZ(angle * 0.7);

	texture(love);
	box(100);

	//   texture(love);

	//  box(250, 250);

	angle += 0.03;



}

function preload() {
	alien = loadImage('alien.png');
}