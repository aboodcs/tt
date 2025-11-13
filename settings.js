// settings.js

let notificationsEnabled = false;

// Function to toggle notifications
function toggleNotifications(state) {
  notificationsEnabled = state;
  console.log(`Notifications are now ${notificationsEnabled ? "ON" : "OFF"}.`);
}

// Example calls
toggleNotifications(true);  // ON
toggleNotifications(false); // OFF
