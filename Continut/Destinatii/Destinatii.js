document.addEventListener("DOMContentLoaded", () => {
    fetch('../Navbar/Navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading Navbar:', error));
    fetch('../Footer/Footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading Footer:', error));
});
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.pagination-link');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = href;
        }, 600); 
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Salvează preferința în localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        body.classList.add("dark-mode");
    }

    toggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark); // Salvează preferința
    });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("../Navbar/Navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Adaugă scriptul după ce navbarul a fost încărcat
            const toggle = document.getElementById("darkModeToggle");
            const body = document.body;
            const isDarkMode = localStorage.getItem("darkMode") === "true";
            if (isDarkMode) {
                body.classList.add("dark-mode");
            }

            toggle.addEventListener("click", function () {
                body.classList.toggle("dark-mode");
                const isDark = body.classList.contains("dark-mode");
                localStorage.setItem("darkMode", isDark);
            });
        });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");

  fetch("../Navbar/Navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load Navbar.html");
      }
      return response.text();
    })
    .then((html) => {
      navbarContainer.innerHTML = html;

      // === Codul trebuie să fie aici, DUPĂ injectarea HTML-ului în pagină ===

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

      // === Alte funcții de login/logout aici ===
    })
    .catch((error) => {
      console.error("Error loading Navbar:", error);
    });

  // Footer (rămâne cum e)
});
