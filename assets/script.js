document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5000/login', { // Update URL if hosted elsewhere
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.access_token) {
            // Handle successful login, store token, etc.
            document.getElementById('message').textContent = 'Login successful!';
            document.getElementById('message').style.color = 'green';
        } else {
            // Handle login failure
            document.getElementById('message').textContent = 'Invalid username or password.';
            document.getElementById('message').style.color = 'red';
        }
    })
    .catch(error => console.error('Error:', error));
});
