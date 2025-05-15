const passwordInput = document.getElementById('password');
const passwordConditions = document.getElementById('password-conditions');
const uppercaseCondition = document.getElementById('uppercase');
const specialCharacterCondition = document.getElementById('special-character');
const minLengthCondition = document.getElementById('min-length');
const confirmPasswordInput = document.getElementById('confirm-password');
const phoneInput = document.getElementById('phone-number');
const phoneConditions = document.getElementById('phone-conditions');
const startsWithCondition = document.getElementById('starts-with');
const noZeroCondition = document.getElementById('no-zero');
const exactLengthCondition = document.getElementById('exact-length');
const togglePassword = document.getElementById('toggle-password');
const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
function updateCondition(conditionElement, isMet) {
  const icon = conditionElement.querySelector('i');
  if (isMet) {
    icon.className = 'bx bxs-check-circle'; 
    icon.style.color = 'green'; 
  } else {
    icon.className = 'bx bxs-circle'; 
    icon.style.color = 'white'; 
  }
}
passwordInput.addEventListener('focus', () => {
  passwordConditions.style.display = 'block';
});
passwordInput.addEventListener('blur', () => {
  if (!passwordInput.value) {
    passwordConditions.style.display = 'none';
  }
});
passwordInput.addEventListener('input', () => {
  const passwordValue = passwordInput.value;
  updateCondition(uppercaseCondition, /[A-Z]/.test(passwordValue));
  updateCondition(specialCharacterCondition, /[!@#\$%\^\&*\)\(+=._-]/.test(passwordValue));
  updateCondition(minLengthCondition, passwordValue.length >= 8); 
});
phoneInput.addEventListener('focus', () => {
  phoneConditions.style.display = 'block';
});

phoneInput.addEventListener('blur', () => {
  if (!phoneInput.value) {
    phoneConditions.style.display = 'none';
  }
});

phoneInput.addEventListener('input', () => {
  const phoneValue = phoneInput.value;
  updateCondition(startsWithCondition, phoneValue.startsWith('+373')); 
  updateCondition(noZeroCondition, /^\+373[1-9]/.test(phoneValue)); 
  updateCondition(exactLengthCondition, phoneValue.replace('+373', '').length === 8); 
});

togglePassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.className = 'bx bxs-show'; 
  } else {
    passwordInput.type = 'password';
    togglePassword.className = 'bx bxs-hide'; 
  }
});

toggleConfirmPassword.addEventListener('click', () => {
  if (confirmPasswordInput.type === 'password') {
    confirmPasswordInput.type = 'text';
    toggleConfirmPassword.className = 'bx bxs-show'; 
  } else {
    confirmPasswordInput.type = 'password';
    toggleConfirmPassword.className = 'bx bxs-hide'; 
  }
});

const form = document.querySelector('form');


form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  window.location.href = "../Logare/Logare.html"; 
});