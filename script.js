const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 800; i++) {
    stars.push({X: Math.random() * canvas.width, Y: Math.random() * canvas.height, opacity: Math.random()});
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
    star.opacity += (Math.random() - 0.5) * 0.05;
    if (star.opacity < 0) star.opacity = 0;
    if (star.opacity > 1) star.opacity = 1;
    ctx.globalAlpha = star.opacity;
    ctx.beginPath(); ctx.arc(star.X, star.Y, 2, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = '#fafbfb';
    requestAnimationFrame(draw);
}
draw();
