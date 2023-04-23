const form = document.querySelector('.form-js');
const emailInput = document.querySelector('#email');
const error = document.querySelector('.error');
const roundIcon = document.querySelector('#red-note');

// Email Validation with regular expression
const isEmail = (email) => /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// function that wiil create an error
const highlightError = (emailInput, errorMessage) => {
  emailInput.classList.add('form__field--error');
  roundIcon.style.display = 'block';
  error.innerText = errorMessage;
};

const clearError = (emailInput) => {
  roundIcon.style.display = 'none';
  emailInput.classList.remove('form__field--error');
  error.innerText = '';
};

const validate = () => {
  const emailValue = emailInput.value.trim();

  clearError(emailInput);

  if (!emailValue) {
    highlightError(emailInput, 'Please provide a valid email');
  } else if (!isEmail(emailValue)) {
    highlightError(emailInput, 'Email is not Valid!');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validate();
});
