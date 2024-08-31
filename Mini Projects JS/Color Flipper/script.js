// Get the body element
const body = document.body;

// Add event listeners to the buttons
document.querySelector(".btn1").addEventListener('click', () => {
  body.style.backgroundColor = 'green';
});

document.querySelector(".btn2").addEventListener('click', () => {
  body.style.backgroundColor = 'red';
});

document.querySelector('.btn3').addEventListener('click', () => {
  body.style.backgroundColor = 'blue';
});

document.querySelector(".btn4").addEventListener('click', () => {
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
  return colors[Math.floor(Math.random() * colors.length)];
}

