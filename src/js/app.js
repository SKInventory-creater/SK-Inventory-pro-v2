import { authState } from "../firebase/auth.js";

/**
 * App Initialize
 */
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

function initializeApp() {
  authState((user) => {
    const page = window.location.pathname;

    // Login Page
    if (page.includes("login.html")) {
  if (user) {
    window.location.replace("dashboard.html");
  }
  return;
}

if (!user) {
  window.location.replace("login.html");
  return;
}

    console.log("User Logged In:", user.email);
  });
}
