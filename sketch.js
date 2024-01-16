// setup() is called once at page-load
function setup() {
    createCanvas(800, 600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    textSize(32);
    fill(180);
    drawDots(hr, 50, 'pink', 1.75); // Draw hours clump in red
    fill(100);
    drawDots(min, 200, 'purple', 1.5); // Draw minutes clump in green
    fill(0);
    drawDots(sec, 350, 'blue', 1); // Draw seconds clump in blue
}

// Function to draw a dot
function drawDot(x, y, radius, color) {
    ellipse(x, y, radius * 2, radius * 2);
    fill(color);
}

// Function to draw multiple dots
function drawDots(numDots, yPos, dotColor, baseRadius) {
    for (let i = 0; i < numDots; i++) {
        const x = i * (baseRadius * 4) + 30; // Adjust spacing
        const y = yPos;
        const radius = baseRadius * (i + 1); // Grow as the time unit increases

        if (x + radius > width) {
            break; // Stop drawing if the circle goes beyond canvas width
        }

        drawDot(x, y, radius, dotColor);
    }
}
