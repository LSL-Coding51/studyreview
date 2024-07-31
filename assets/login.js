document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
    const body = document.body;

    // Check for dark mode preference in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    loginForm.addEventListener('submit', async function(event) {
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

    darkModeToggleBtn.addEventListener('click', toggleDarkMode);
});

function toggleDarkMode() {
    const body = document.getElementById('html');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
}
