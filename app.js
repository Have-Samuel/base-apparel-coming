const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
// const error = document.querySelector('.error');
// const btn = document.querySelector('button');

// Email Validation
const isEmail = (email) => /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// function thatr wiil create an error
const highlightError = (emailInput, errorMessage) => {
  emailInput.parentNode.classList.add('form__field--error');
  emailInput.nextElementSilbling.innerText = errorMessage;
};

// function that will remove the error
const clearError = (emailInput) => {
  emailInput.parentNode.classList.remove('form__field--error');
  emailInput.nextElementSilbling.innerText = '';
};

const validate = () => {
  clearError(emailInput);

  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    highlightError(emailInput, 'Please provide a valid email!');
  } else {
    if (!isEmail(emailValue)) {
      highlightError(emailInput, 'Email is not Valid!');
    }
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