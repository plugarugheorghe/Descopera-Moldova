document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (newPassword !== confirmPassword) {
    alert('Parolele nu se potrivesc. Vă rugăm să verificați.');
    return;
  }
});
// Function to toggle password visibility
function togglePassword(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("bx-hide", "bx-show");
  } else {
    input.type = "password";
    icon.classList.replace("bx-show", "bx-hide");
  }
}

// Adaugăm evenimentele pentru iconițe
document.getElementById("toggle-new-password").addEventListener("click", function () {
  togglePassword("new-password", "toggle-new-password");
});

document.getElementById("toggle-confirm-password").addEventListener("click", function () {
  togglePassword("confirm-password", "toggle-confirm-password");
});

// Validare și redirect la submit
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Opresc comportamentul implicit al formularului

  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (newPassword === "" || confirmPassword === "") {
    alert("Te rugăm să completezi ambele câmpuri.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Parolele nu coincid. Te rugăm să le verifici.");
    return;
  }

  // Dacă totul e ok, direcționează către pagina de login
  window.location.href = "../Logare/Logare.html";
});