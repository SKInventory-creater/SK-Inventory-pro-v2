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
if (page.includes("pages/login.html")) {
  if (user) {
    window.location.replace("./pages/dashboard.html");
  }
  return;
}

// Protected Pages
if (!user) {
  window.location.replace("./pages/login.html");
  return;
}

    console.log("User Logged In:", user.email);
  });
}
