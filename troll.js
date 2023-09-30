const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const resultMessage = document.getElementById('resultMessage');
let hasCursorBeenClose = false;

yesButton.addEventListener('click', () => {
  resultMessage.textContent = 'Yes, you\'re right!';
  window.location.href = "https://youtu.be/xvFZjo5PgG0?si=Z1iO9Ol3FuU6lkXo";
});

document.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
  if (!hasCursorBeenClose) {
    const rect = noButton.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const isCursorClose = (
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom
    );

    if (isCursorClose) {
      hasCursorBeenClose = true;
      setInterval(repositionNoButton, 100);
    }
  }
}

function repositionNoButton() {
  const maxWidth = window.innerWidth - noButton.offsetWidth;
  const maxHeight = window.innerHeight - noButton.offsetHeight;

  const newX = Math.floor(Math.random() * maxWidth);
  const newY = Math.floor(Math.random() * maxHeight);

  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;
}
