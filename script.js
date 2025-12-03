const confettiContainer = document.querySelector('.confetti');
const button = document.getElementById('confettiButton');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';

  const size = Math.random() * 10 + 6;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
  heart.style.background = Math.random() > 0.5 ? 'var(--accent)' : 'var(--accent-2)';

  confettiContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6500);
}

function releaseConfetti(burst = 30) {
  for (let i = 0; i < burst; i += 1) {
    setTimeout(createHeart, i * 50);
  }
}

button.addEventListener('click', () => releaseConfetti(40));

// A gentle burst on page load to greet Alya
releaseConfetti(24);
