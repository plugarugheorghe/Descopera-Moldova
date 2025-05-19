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
    })
    .catch((error) => {
      console.error("Error loading Navbar:", error);
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");

  fetch("../Footer/Footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Nu s-a putut încărca Footer.html");
      }
      return response.text();
    })
    .then((html) => {
      footerContainer.innerHTML = html;
    })
    .catch((error) => {
      console.error("Eroare la încărcarea footer-ului:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
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

document.addEventListener("DOMContentLoaded", function () {
    fetch("../Navbar/Navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

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

