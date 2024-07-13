let colorInput = document.querySelector('#color')
let hexInput = document.querySelector('#hex')

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    document.body.style.background = color;
})
function copyText() {
    const hexInput = document.getElementById('hex');
    hexInput.select();
    document.execCommand('copy');
    alert("Code Copied")
}

const h1 = document.getElementById('color-picker');
const letters = h1.textContent.split('');

h1.innerHTML = '';

letters.forEach((letter, index) => {
  const span = document.createElement('span');
  span.textContent = letter;
  span.style.color = getRandomColor();
  h1.appendChild(span);
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Automatically change color every 1 second
setInterval(() => {
  const spans = h1.children;
  Array.from(spans).forEach((span) => {
    span.style.color = getRandomColor();
  });
}, 1000);

