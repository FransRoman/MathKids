function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for demonstration purposes
    const validUsername = 'admin';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        window.location.href = 'MathKids_page.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
