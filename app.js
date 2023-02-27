// const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');

const atpos = input.value.indexOf('@');
const dotpos = input.value.lastIndexOf('.');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= input.value.length) {
    console.log('not valid');
  } else {
    console.log('valid');
    throw new Error('not valid');
  }
});