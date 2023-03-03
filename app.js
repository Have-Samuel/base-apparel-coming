// const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');

// const atSign = input.value.indexOf('@');
// const dotSign = input.value.lastIndexOf('.');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const lowText = document.createElement('p');
  lowText.innerText = input.value.toLowerCase();
  lowText.classList.toggle('lowText');
  input.innerText = 'Please provide a valid email';
  input.classList.toggle('error');
  input.appendChild(lowText);
  input.value = '';
  if (input.value === '') {
    input.classList.toggle('error');
  } else {
    input.classList.remove('error');
  }
});