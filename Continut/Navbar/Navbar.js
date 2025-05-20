document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    loginLink.style.display = "none";
    logoutLink.style.display = "inline-block";
  } else {
    loginLink.style.display = "inline-block";
    logoutLink.style.display = "none";
  }

  logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    window.location.href = "../../Securtity/Logare/Logare.html";
  });
});


