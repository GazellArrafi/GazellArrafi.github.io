const button = document.querySelector('button');

const html = document.querySelector('html');

button.addEventListener('click', function () {
  if(html.dataset.colorMode === 'light'){
    html.dataset.colorMode = 'dark';
    this.textContent = 'light mode';
  } else{
    html.dataset.colorMode = 'light';
    this.textContent = 'dark mode';
  }
});

function f1()
{
  alert("Makasih na");
}

let positions = [
  { x: 250, y: 250 },
  { x: 250, y: 0 },
  { x: 0, y: 250 },
  { x: 0, y: 0 },
];
let currentPos = 0;

function f() {
  let Bn = document.getElementById('Bn');
  let button = Bn.querySelector('input[type="button"]');
  
  button.style.transform = `translate(${positions[currentPos].x}px, 
    ${positions[currentPos].y}px)`;

  currentPos = (currentPos + 1) % positions.length;
}

function shakeButton() {
  let button = document.querySelector('#By input[type="button"]');
  button.classList.add('shake');

  setTimeout(function() {
    button.classList.remove('shake');
  }, 3000); // Hentikan animasi setelah 3 detik (3000 milidetik)
}

setInterval(shakeButton, 5000);