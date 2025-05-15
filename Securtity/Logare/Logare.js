const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
togglePassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.className = 'bx bxs-show';
  } else {
    passwordInput.type = 'password';
    togglePassword.className = 'bx bxs-hide';
  }
});
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  window.location.href = "../../Continut/Home/Home.html"; 
});
