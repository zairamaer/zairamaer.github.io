document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Encrypted credentials (base64)
    const encodedUsername = 'YWRtaW4='; // "admin"
    const encodedPassword = 'cGFzc3dvcmQ='; // "password"
    
    // Decode the base64 strings
    const decodedUsername = atob(encodedUsername);
    const decodedPassword = atob(encodedPassword);

    if (username === decodedUsername && password === decodedPassword) {
        document.getElementById('message').innerHTML = 'Login successful! Flag: iasCTF{congrats_you_found_the_flag}';
    } else {
        document.getElementById('message').innerHTML = 'Incorrect username or password.';
    }
});
