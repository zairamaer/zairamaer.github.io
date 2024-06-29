document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Encrypted credentials (base64)
    const encodedUsername = 'YWRtaW4='; //username
    const encodedPassword = 'cGFzc3dvcmQ='; //password
    
    // Decode the base64 strings
    const decodedUsername = atob(encodedUsername);
    const decodedPassword = atob(encodedPassword);
    
    if (username === decodedUsername && password === decodedPassword) {
        // Generate and display the flag message
        displayFlag();
    } else {
        document.getElementById('message').innerHTML = 'Incorrect username or password.';
    }
});

function displayFlag() {
    // Encrypted flag (base64 encoded)
    const encryptedFlag = 'aWFzQ1RGe2NvbmdyYXRzX3lvdV9mb3VuZF90aGVfZmxhZ30='; 
    
    // Decode the base64 string to reveal the flag
    const flag = atob(encryptedFlag);
    
    // Display the flag message
    document.getElementById('message').innerHTML = `Login successful! Flag: ${flag}`;
}
