fetch('users.json')
  .then(response => response.json())
  .then(data => {
    const users = data.users;

    // Assuming you have input fields for username and password with ids "usernameInput" and "passwordInput"
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    // Check if the input username and password match any entry in the JSON data
    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
      console.log("Login successful");
      // Add code here to redirect or display a success message
      // For example: window.location.href = "dashboard.html";
    } else {
      console.log("Incorrect username or password");
      // Add code here to display an error message to the user
      // For example: document.getElementById("errorMessage").innerText = "Incorrect username or password";
    }
  })
  .catch(error => {
     console.error('Error:', error);
     // Add code here to handle errors, such as displaying an error message to the user
  });
