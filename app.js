const form = document.querySelector('.form-js');
const emailInput = document.querySelector('#email');
const error = document.querySelector('.error');
const roundIcon = document.querySelector('#red-note');

// Email Validation with regular expression
const isEmail = (email) => /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// function thatr wiil create an error
const highlightError = (emailInput, errorMessage) => {
  emailInput.classList.add('form__field--error');
  roundIcon.classList.add('round-icon');
  console.log(roundIcon);
  error.innerText = errorMessage;
};

// Function that will remove the error
const clearError = (emailInput) => {
  // roundIcon.classList.remove('round-icon');
  emailInput.classList.remove('form__field--error');
  error.innerText = '';
  // console.log(emailInput);
};

const validate = () => {
  const emailValue = emailInput.value.trim();

  console.log(emailValue);
  clearError(emailInput);

  if (!emailValue) {
    highlightError(emailInput, 'Please provide a valid email');
    roundIcon.classList.toggle('round-icon');
  } else if (!isEmail(emailValue)) {
    highlightError(emailInput, 'Email is not Valid!');
    roundIcon.classList.toggle('round-icon');
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