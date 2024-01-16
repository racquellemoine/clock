// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    textSize(32);
    fill(180);
    drawDots(hr)
    fill(100);
    text(min, 10, 60);
    fill(0);
    text(sec, 10, 90);
}

// Function to draw a dot
function drawDot(x, y, radius, color) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
  
// Function to draw multiple dots
function drawDots(numDots) {
  
    for (let i = 0; i < numDots; i++) {
        const x = 10 * canvas.width;
        const y = i * canvas.height;
        const radius = Math.random() * 10 + 5; // Random radius between 5 and 15
        const color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`;
  
        drawDot(x, y, radius, color);
    }
}
