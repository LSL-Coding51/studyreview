document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('assets/users.json')
        .then(response => response.json())
        .then(users => {
            var user = users[username];
            if (user && user.password === password) {
                document.getElementById('message').textContent = 'Login successful!';
                document.getElementById('message').style.color = 'green';
            } else {
                document.getElementById('message').textContent = 'Invalid username or password.';
                document.getElementById('message').style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            document.getElementById('message').textContent = 'Error fetching user data.';
            document.getElementById('message').style.color = 'red';
        });
});
