/**
 * LEFT CANVAS
 */
// Initialising the canvas 
let canvas = document.querySelector('.canvas_left'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = 200;
canvas.height = 800;

// Setting up the letters
let letters = '的一是不了在人有我他这个们中来上大为和国地到以说时要就出会可也你对生能而子那得于着下自之年过发后作里用道行所然家种事成方多经么去法学如都同现当没动面起看定天分还进好小部其些主样';
letters = letters.split('');

// Setting up the columns
let fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
let drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 70);

/**
 * RIGHT CANVAS
 */