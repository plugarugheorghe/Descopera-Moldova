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
// Selectează formularul
const form = document.querySelector('form');

// Adaugă un eveniment pentru butonul de submit
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Previne comportamentul implicit de trimitere a formularului

  // După ce datele sunt procesate (validare, autentificare), redirecționează utilizatorul către pagina principală
  window.location.href = "../../Continut/Home/Home.html"; // Calea corectă către Home.html
});
