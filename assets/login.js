fetch('users.json')
  .then(response => response.json())
  .then(data => {
    const users = data.users;

    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
      console.log("Login successful");
    } else {
      console.log("Incorrect username or password");
       document.getElementById("usernameInput").value = "";
       document.getElementById("passwordInput").value = "";
   }
 })
 .catch(error => {
   console.error('Error:', error);
 });
