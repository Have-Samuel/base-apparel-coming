const form = document.querySelector('form');
const input = document.querySelector('#email');
// const error = document.querySelector('.error');
const btn = document.querySelector('button');

btn.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('HELLO!');
  if (input.validity.typeMismatch) {
    input.setCustomValidity('Please provide a valid email!');
  } else {
    input.setCustomValidity('');
  }
});