// const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');

const atpos = input.value.indexOf('@');
const dotpos = input.value.lastIndexOf('.');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  input.textContent = '';
  input.classList.toggle('error');
  if (atpos < 1 || dotpos < atpos + 2
    || dotpos + 2 >= input.value.length) {
    input.textContent = 'Please provide a valid email';
    input.classList.toggle('error');
  }
});