document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const encodedUsername = 'YWRtaW4='; //username
    const encodedPassword = 'cGFzc3dvcmQ='; //password
    
    const decodedUsername = atob(encodedUsername);
    const decodedPassword = atob(encodedPassword);
    
    if (username === decodedUsername && password === decodedPassword) {
        displayFlag();
    } else {
        document.getElementById('message').innerHTML = 'Incorrect username or password.';
    }
});

function displayFlag() {
    const encryptedFlag = 'aWFzQ1RGe2NvbmdyYXRzX3lvdV9mb3VuZF90aGVfZmxhZ30='; 
    
    const flag = atob(encryptedFlag);
    
    document.getElementById('message').innerHTML = `Login successful! Flag: ${flag}`;
}
