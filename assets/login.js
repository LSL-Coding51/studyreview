document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login').addEventListener('submit', async function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('assets/users.json');
            const users = await response.json();
            
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                document.getElementById('message').textContent = 'Login successful!';
                document.getElementById('message').style.color = 'green';
            } else {
                document.getElementById('message').textContent = 'Invalid email or password.';
                document.getElementById('message').style.color = 'red';
            }
        } catch (error) {
            console.error('Error loading JSON:', error);
            document.getElementById('message').textContent = 'Error logging in.';
            document.getElementById('message').style.color = 'red';
        }
    });
});
