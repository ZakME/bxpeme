// TOP DOWN PLAYER

// Declare Globl Variables
// SETUP FUNCTION - Runs once at beginning of program
let angle = 0;

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
	love.text('zak <3', 170, 170);
}

function draw() {
	background(0);
	var locY = (mouseY / height - 0.5) * (-2);
  	var locX = (mouseX / width - 0.5) * 2;
	// graphics.fill(255, 0, 255);
	// graphics.ellipse(mouseX, mouseY, 20);
	//   ambientLight(100);
	ambientLight(50);
  	directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
  	pointLight(0, 0, 200, locX, locY, 0);
  	pointLight(200, 200, 0, -locX, -locY, 0);
	rotateX(angle);
	rotateY(angle * 1.3);
	rotateZ(angle * 0.71);
	specularMaterial(250);
	texture(love);
	box(100);

	//   texture(love);

	//  box(250, 250);

	angle += 0.03;



}

