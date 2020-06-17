
// Initialising the canvas 
let canvasRight = document.querySelector('.canvas_right'),
    ctxRight = canvasRight.getContext('2d');

// Setting the width and height of the canvas
canvasRight.width = 200;
canvasRight.height = 800;

// Setting up the letters
let lettersRight = '的一是不了在人有我他这个们中来上大为和国地到以说时要就出会可也你对生能而子那得于着下自之年过发后作里用道行所然家种事成方多经么去法学如都同现当没动面起看定天分还进好小部其些主样';
lettersRight = lettersRight.split('');

// Setting up the columns
let fontSizeRight = 10,
    columnsRight = canvasRight.width / fontSizeRight;

// Setting up the drops
let dropsRight = [];
for (let i = 0; i < columnsRight; i++) {
    dropsRight[i] = 1;
}

// Setting up the draw function
function draw() {
    ctxRight.fillStyle = 'rgba(0, 0, 0, .1)';
    ctxRight.fillRect(0, 0, canvasRight.width, canvasRight.height);
  for (let i = 0; i < dropsRight.length; i++) {
    let text = lettersRight[Math.floor(Math.random() * lettersRight.length)];
    ctxRight.fillStyle = '#0f0';
    ctxRight.fillText(text, i * fontSizeRight, dropsRight[i] * fontSizeRight);
    dropsRight[i]++;
    if (dropsRight[i] * fontSizeRight > canvasRight.height && Math.random() > 0.99) {
        dropsRight[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 70);
