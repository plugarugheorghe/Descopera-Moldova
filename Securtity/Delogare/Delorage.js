function login() {
    alert("Te-ai logat cu succes!");

    const authButtonContainer = document.getElementById("auth-button-container");
    authButtonContainer.innerHTML = `
        <a href="#" class="button" id="logout-btn" onclick="logout()"><b>Logout</b></a>
    `;
}

function logout() {

    alert("Te-ai delogat cu succes!");

    const authButtonContainer = document.getElementById("auth-button-container");
    authButtonContainer.innerHTML = `
        <a href="../../Securtity/Logare/Logare.html" class="button" id="login-btn" onclick="login()"><b>Login</b></a>
    `;
}


function checkLoginStatus() {
    const isLoggedIn = false;

    if (isLoggedIn) {
        login(); 
    }
}


checkLoginStatus();