document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('assets/users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            const messageElement = document.getElementById('message');
            
            if (user) {
                messageElement.textContent = 'Login successful!';
                messageElement.style.color = 'green';
                // Redirect or proceed to the next step after successful login
            } else {
                messageElement.textContent = 'Invalid username or password.';
                messageElement.style.color = 'red';
            }
        })
        .catch(error => console.error('Error loading JSON:', error));
});
