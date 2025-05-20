document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");
  const footerContainer = document.getElementById("footer-container");

  // Încarcă navbar-ul
  fetch("../Navbar/Navbar.html")
    .then((response) => {
      if (!response.ok) throw new Error("Nu s-a putut încărca Navbar.html");
      return response.text();
    })
    .then((html) => {
      navbarContainer.innerHTML = html;

      // === TOT CE ȚINE DE NAVBAR SE PUNE AICI ===

      // Autentificare
      const loginLink = document.getElementById("login-link");
      const logoutLink = document.getElementById("logout-link");

      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      loginLink.style.display = isLoggedIn ? "none" : "inline-block";
      logoutLink.style.display = isLoggedIn ? "inline-block" : "none";

      logoutLink.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        window.location.href = "../../Securtity/Delogare/Delogare.html";
      });

      // Dark Mode
      const toggle = document.getElementById("darkModeToggle");
      const icon = document.getElementById("darkModeIcon");
      const body = document.body;

      const isDarkMode = localStorage.getItem("darkMode") === "true";
      if (isDarkMode) {
        body.classList.add("dark-mode");
        icon.textContent = "🌙";
      } else {
        icon.textContent = "☀️";
      }

      toggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
        icon.textContent = isDark ? "🌙" : "☀️";
      });
    })
    .catch((error) => console.error("Eroare la navbar:", error));

  // Încarcă footer-ul
  fetch("../Footer/Footer.html")
    .then((response) => {
      if (!response.ok) throw new Error("Nu s-a putut încărca Footer.html");
      return response.text();
    })
    .then((html) => {
      footerContainer.innerHTML = html;
    })
    .catch((error) => console.error("Eroare la footer:", error));
});
