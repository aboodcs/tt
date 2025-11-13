// login.js
const users = [
  { username: "user1", password: "pass123" },
  { username: "admin", password: "admin123" },
  { username: "guest", password: "guest123" },
];

function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    console.log(`Login successful! Welcome, ${username}.`);
    return true;
  } else {
    console.log("Login failed. Invalid username or password.");
    return false;
  }
}

// Example calls
login("user1", "pass123");
login("admin", "wrongpass");
login("guest", "guest123");
login("unknown", "test");
