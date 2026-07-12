// Global CSS
import "./assets/css/main.css";

// Firebase
import { authState } from "./firebase/auth.js";

// App
import { initLogin } from "./js/auth.js";
import { initDashboard } from "./js/dashboard.js";

const app = document.getElementById("app");

authState((user) => {
  if (user) {
    initDashboard(app, user);
  } else {
    initLogin(app);
  }
});
