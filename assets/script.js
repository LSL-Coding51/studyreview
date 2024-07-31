document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
    const body = document.body;

    // Check for dark mode preference in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

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
