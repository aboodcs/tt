// dashboard.js

// Example list of user tasks
const tasks = [
  "Complete login feature",
  "Design dashboard UI",
  "Write unit tests",
  "Update README.md"
];

// Function to display tasks
function showDashboard() {
  console.log("=== User Dashboard ===");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

// Example call
showDashboard();
