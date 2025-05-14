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
// Function to simulate login
function login() {
    // Simulate login logic (replace with actual authentication logic)
    alert("You are now logged in!");

    // Replace the Login button with a Logout button
    const authButtonContainer = document.getElementById("auth-button-container");
    authButtonContainer.innerHTML = `
        <button id="logout-btn" onclick="logout()">Logout</button>
    `;
}

// Function to simulate logout
function logout() {
    // Simulate logout logic (replace with actual logout logic)
    alert("You are now logged out!");

    // Replace the Logout button with a Login button
    const authButtonContainer = document.getElementById("auth-button-container");
    authButtonContainer.innerHTML = `
        <button id="login-btn" onclick="login()">Login</button>
    `;
}