document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");

  // Fetch the content of Navbar.html
  fetch("../Navbar/Navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load Navbar.html");
      }
      return response.text();
    })
    .then((html) => {
      // Insert the content into the navbar container
      navbarContainer.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading Navbar:", error);
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");

  // Fetch the content of Footer.html
  fetch("../Footer/Footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Nu s-a putut încărca Footer.html");
      }
      return response.text();
    })
    .then((html) => {
      // Inserează conținutul în containerul footer-ului
      footerContainer.innerHTML = html;
    })
    .catch((error) => {
      console.error("Eroare la încărcarea footer-ului:", error);
    });
});