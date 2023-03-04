const form = document.querySelector('.form-js');
const emailInput = document.querySelector('#email');
// const textError = document.querySelector('.error');
const error = document.querySelector('.error');
// const btn = document.querySelector('button');

// Email Validation with regular expression
const isEmail = (email) => /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// function thatr wiil create an error
const highlightError = (emailInput, errorMessage) => {
  emailInput.classList.add('form__field--error');
  error.innerText = errorMessage;
};

// Function that will remove the error
const clearError = (emailInput) => {
  emailInput.classList.remove('form__field--error');
  error.innerText = '';
};

const validate = () => {
  const emailValue = emailInput.value.trim();

  clearError(emailInput);

  if (!emailValue) {
    highlightError(emailInput, 'Please enter your email address!');
  } else if (!isEmail(emailValue)) {
    highlightError(emailInput, 'Email is not Valid!');
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