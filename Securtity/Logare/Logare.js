document.addEventListener('DOMContentLoaded', function () {
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

    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;

    if (username && password) {
      // Simulăm logarea
      localStorage.setItem("isLoggedIn", "true");

      // Redirecționare spre pagina principală
      window.location.href = "../../Continut/Home/Home.html";
    } else {
      alert("Te rugăm să introduci username și parolă!");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;

    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "../../Continut/Home/Home.html";
    } else {
      alert("Te rugăm să completezi username și parola.");
    }
  });
});
