import { authState } from "../firebase/auth.js";

document.addEventListener("DOMContentLoaded", () => {
  authState((user) => {
    const page = window.location.pathname;

    // Login page
    if (page.includes("/pages/login.html")) {
      if (user) {
        window.location.replace("/pages/dashboard.html");
      }
      return;
    }

    // Protected pages
    if (!user && !page.endsWith("/index.html") && !page.endsWith("/pages/login.html")) {
      window.location.replace("/pages/login.html");
      return;
    }

    console.log("User Logged In:", user?.email);
  });
});
