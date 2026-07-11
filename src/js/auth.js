import { login } from "../firebase/auth.js";

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const errorMessage = document.getElementById("errorMessage");

loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    errorMessage.textContent = "";
    loginButton.disabled = true;
    loginButton.textContent = "ဝင်နေသည်...";

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    try {
        await login(email, password);

        window.location.href = "dashboard.html";

    } catch (error) {

        switch (error.code) {
            case "auth/invalid-credential":
                errorMessage.textContent = "အီးမေးလ် သို့မဟုတ် စကားဝှက် မှားနေပါသည်။";
                break;

            case "auth/too-many-requests":
                errorMessage.textContent = "ကြိုးစားမှုများလွန်းပါသည်။ ခဏစောင့်ပြီး ထပ်မံကြိုးစားပါ။";
                break;

            case "auth/network-request-failed":
                errorMessage.textContent = "အင်တာနက်ချိတ်ဆက်မှုကို စစ်ဆေးပါ။";
                break;

            default:
                errorMessage.textContent = "Login မအောင်မြင်ပါ။ ထပ်မံကြိုးစားပါ။";
        }

    } finally {

        loginButton.disabled = false;
        loginButton.textContent = "ဝင်မည်";

    }
});
