const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
// const error = document.querySelector('.error');
const btn = document.querySelector('button');

// Email Validation

// function thatr wiil create an error
const highlightError = (emailInput, errorMessage) => {
  emailInput.parentNode.classList.add('form__field--error');
  emailInput.nextElementSilbling.textContent = errorMessage;
};

const validate = () => {
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    highlightError(emailInput, 'Please provide a valid email!');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validate();
});

// btn.addEventListener('submit', () => {
//   console.log('HELLO!');
//   if (input.validity.typeMismatch) {
//     input.setCustomValidity('Please provide a valid email!');
//   } else {
//     input.setCustomValidity('');
//   }
// });