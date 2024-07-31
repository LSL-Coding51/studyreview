document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
    const body = document.body;
   
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }
function toggleDarkMode() {
   var element = document.getElementById('html');
   element.classList.toggle("dark-mode");
}
function toggleDarkMode() {
    const body = document.getElementById('html');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
}
function toggleDarkMode() {
   var element = document.getElementById('html');
   element.classList.toggle("dark-mode");
}
