// MAKE IT SNOW

// Declare Global Variables
let snowFlakes;
let colRR, colBB, colGG;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(screen.width - 100, screen.height - 160);

    // Initialize Global Variables
    snowFlakes = [];
    for (let n = 0; n < 50; n++) {
        snowFlakes.push({
            x: random(width),
            y: random(height),
            sz: random(2, 10),
            speed: random(1, 5),
            colR: random(1, 255),
            colG: random(1, 255),
            colB: random(1, 255)
        });
    }

    colRR = 255;
    colGG = 0;
    colBB = 0;
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);
    noStroke();
    for (let i = 0; i < snowFlakes.length; i++) {
        // Move Snowflakes
        snowFlakes[i].y += snowFlakes[i].speed;
        if (snowFlakes[i].y > height + 20) {
            snowFlakes[i].y = random(-50, 0);
            snowFlakes[i].x = random(width);
        }
        // Draw Snowflakes
        fill(snowFlakes[i].colR, snowFlakes[i].colG, snowFlakes[i].colB);
        ellipse(snowFlakes[i].x, snowFlakes[i].y, 2 * snowFlakes[i].sz);
    }

    // Draw ohgeesy test
    colGG = colGG + 0.8;
    colBB = colBB + 0.5;

    fill(colRR, colGG, colBB);
    textAlign(CENTER);
    textSize(30);
    textStyle(ITALIC);
    text("ohgeesy", width / 2, height / 2)

}