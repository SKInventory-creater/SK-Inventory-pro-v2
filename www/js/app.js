/**
 * ==========================================================
 * SK Inventory Pro v2 (Cloud Edition)
 * File: www/js/app.js
 * Purpose: Global Application Initialization
 * ==========================================================
 */

const App = {

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.hideLoading();
            this.registerGlobalEvents();
            console.log("SK Inventory Pro started.");
        });
    },

    showLoading() {
        const overlay = document.getElementById("loadingOverlay");
        if (overlay) {
            overlay.classList.remove("hidden");
        }
    },

    hideLoading() {
        const overlay = document.getElementById("loadingOverlay");
        if (overlay) {
            overlay.classList.add("hidden");
        }
    },

    showMessage(message, isError = true) {
        const box = document.getElementById("loginMessage");
        if (!box) return;

        box.textContent = message;
        box.style.color = isError ? "#DC2626" : "#16A34A";
    },

    clearMessage() {
        const box = document.getElementById("loginMessage");
        if (box) {
            box.textContent = "";
        }
    },

    registerGlobalEvents() {

        window.addEventListener("offline", () => {
            this.showMessage("အင်တာနက် ချိတ်ဆက်မှု မရှိပါ။");
        });

        window.addEventListener("online", () => {
            this.showMessage("အင်တာနက် ပြန်လည်ချိတ်ဆက်ပြီးပါပြီ။", false);

            setTimeout(() => {
                this.clearMessage();
            }, 3000);
        });

    }

};

App.init();

export default App;
