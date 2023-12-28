const numStars = 200;
const animationSpeed = 5000;

const nightSky = document.querySelector('.night-sky');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = animationSpeed + i * 5 + 'ms';
    star.style.animationDelay = i * 20 + 'ms';
    nightSky.appendChild(star);
}