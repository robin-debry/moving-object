const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// ctx.strokeRect(0, 0, 100, 100);
// ctx.fillRect(20, 20, 50, 50);
// ctx.fillText('ALGOSUP', 100, 100, 100);

// let width = canvas.width;
// let height = canvas.height;
// let rectWidth = 100;
// let rectHeight = 150;

// let x = (width-rectWidth)/2;
// let y = (height-rectHeight)/2;

// console.log(x, y);

// ctx.fillRect(x, y, rectWidth, rectHeight);

// ctx.ellipse(150, 150, 100, 50, 10, 0, 2 * Math.PI);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.stroke();

// draw image

// const img = new Image();
// img.src = 'https://picsum.photos/200/300';
// img.onload = function() {
//   ctx.drawImage(img, 0, 0);
// }

//move image with arrow keys

const img = new Image();
let x = 0;
let y = 0;
let h = 200;
let w = 200;
img.src = 'https://picsum.photos/200/300';
img.onload = function() {
    ctx.drawImage(img, x, y,w,h);
    }

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        x += 10;
        if (x > canvas.width-w) {
            x -= 10;
        }
        ctx.drawImage(img, x, y,w,h);
    }
    if (event.key === 'ArrowLeft') {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        x -= 10;
        if (x < 0) {
            x += 10
        }
        ctx.drawImage(img, x, y, w, h);
    }
    if (event.key === 'ArrowUp') {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        h += 10;
        w += 10;
        ctx.drawImage(img, x, y, w, h);
    }
    if (event.key === 'ArrowDown') {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        w -= 10;
        h -= 10;
        ctx.drawImage(img, x, y, w, h);
    }
})