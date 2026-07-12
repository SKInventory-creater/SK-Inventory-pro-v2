import { logout, currentUser } from "../firebase/auth.js";


const userEmail =
    document.getElementById("userEmail");

const logoutBtn =
    document.getElementById("logoutBtn");

const backupBtn =
    document.getElementById("backupBtn");

const restoreBtn =
    document.getElementById("restoreBtn");

const backBtn =
    document.getElementById("backBtn");


// Load User Info

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const user =
            currentUser();


        if(user){

            userEmail.textContent =
                user.email;

        }

    }
);


// Logout

logoutBtn.onclick = async () => {

    await logout();

    window.location.href =
        "login.html";

};


// Backup

backupBtn.onclick = () => {

    alert(
        "Cloud Backup System ကို မကြာမီ ချိတ်ဆက်ပါမည်။"
    );

};


// Restore

restoreBtn.onclick = () => {

    alert(
        "Cloud Restore System ကို မကြာမီ ချိတ်ဆက်ပါမည်။"
    );

};


// Back

backBtn.onclick = () => {

    window.location.href =
        "dashboard.html";

};
