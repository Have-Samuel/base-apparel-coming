const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.toggle('btn')) {
    console.log('Button clicked');
  }
});