const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btn.addEventListener('click', () => {
    console.log('HELLO!');
    if (input.value.trim() === '') {
      input.innerText = 'Please provide a valid email ';
      input.style.display = 'block';
      return false;
    }
  });
});

// document.form['main-form'].onsubmit = (e) => {
//   if (this.input.value.trim() === '') {
//     document.querySelector('#email').innerHTML = 'Please provide a valid email';
//     document.querySelector('#email').style.display = 'block';
//     e.preventDefault();
//     return false;
//   }
// };