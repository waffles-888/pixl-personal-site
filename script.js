const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 250; i++) {
    stars.push({X: Math.random() * canvas.width, Y: Math.random() * canvas.height, opacity: Math.random()});
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
    ctx.globalAlpha = star.opacity;
    ctx.beginPath(); ctx.arc(star.X, star.Y, 2, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = '#fafbfb';
    requestAnimationFrame(draw);
}
draw();
