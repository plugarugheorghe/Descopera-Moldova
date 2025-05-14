// Simulare login
function login() {
    // Afișează un mesaj de logare (poți înlocui cu logica de autentificare reală)
    alert("Te-ai logat cu succes!");

    // Înlocuiește butonul "Login" cu "Logout"
    const authButtonContainer = document.getElementById("auth-button-container");
    authButtonContainer.innerHTML = `
        <a href="#" class="button" id="logout-btn" onclick="logout()"><b>Logout</b></a>
    `;
}

// Simulare logout
function logout() {
    // Afișează un mesaj de delogare (poți înlocui cu logica de delogare reală)
    alert("Te-ai delogat cu succes!");

    // Înlocuiește butonul "Logout" cu "Login"
    const authButtonContainer = document.getElementById("auth-button-container");
    authButtonContainer.innerHTML = `
        <a href="../../Securtity/Logare/Logare.html" class="button" id="login-btn" onclick="login()"><b>Login</b></a>
    `;
}

// Verificare stare logare (simulare)
function checkLoginStatus() {
    // Aici poți implementa logica de verificare a sesiunii utilizatorului.
    // Pentru acest exemplu, vom presupune că utilizatorul nu este logat.
    const isLoggedIn = false;

    if (isLoggedIn) {
        login(); // Dacă utilizatorul este logat, afișează butonul "Logout"
    }
}

// Apelează funcția pentru verificarea stării de logare
checkLoginStatus();