import { logout } from "../firebase/auth.js";
import { getBundles } from "../firebase/firestore.js";

// Elements
const bundleList = document.getElementById("bundleList");
const bundleCount = document.getElementById("bundleCount");

const itemCount = document.getElementById("itemCount");
const soldCount = document.getElementById("soldCount");
const remainCount = document.getElementById("remainCount");

const logoutBtn = document.getElementById("logoutBtn");
const searchInput = document.getElementById("searchInput");
const addBundleBtn = document.getElementById("addBundleBtn");
const reportBtn = document.getElementById("reportBtn");
const settingsBtn = document.getElementById("settingsBtn");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    loadDashboard();
});

// Load Dashboard
async function loadDashboard() {
    bundleList.innerHTML = "<p>Loading...</p>";

    try {
        const snapshot = await getBundles();

        bundleList.innerHTML = "";

        bundleCount.textContent = snapshot.size;

        // TODO:
        itemCount.textContent = "0";
        soldCount.textContent = "0";
        remainCount.textContent = "0";

        if (snapshot.empty) {
            bundleList.innerHTML =
                '<div class="empty-state">ဘေထုတ် မရှိသေးပါ။</div>';
            return;
        }

        snapshot.forEach(doc => {

            const bundle = doc.data();

            const card = document.createElement("div");

            card.className = "bundle-card";

            card.innerHTML = `
                <div class="bundle-title">
                    ${bundle.bundleNo ?? "No Number"}
                </div>

                <div class="bundle-info">
                    Supplier : ${bundle.supplier ?? "-"}
                </div>

                <div class="bundle-info">
                    Status : ${bundle.status ?? "Active"}
                </div>
            `;

            card.addEventListener("click", () => {
                window.location.href =
                    `items.html?bundle=${doc.id}`;
            });

            bundleList.appendChild(card);

        });

    } catch (err) {

        console.error(err);

        bundleList.innerHTML =
            '<div class="empty-state">Data မဖတ်နိုင်ပါ။</div>';

    }
}

// Logout
logoutBtn.addEventListener("click", async () => {

    await logout();

    window.location.href = "login.html";

});

// Search
searchInput.addEventListener("input", () => {

    const keyword = searchInput.value
        .toLowerCase();

    document
        .querySelectorAll(".bundle-card")
        .forEach(card => {

            card.style.display =
                card.innerText
                .toLowerCase()
                .includes(keyword)
                ? ""
                : "none";

        });

});

// Navigation
addBundleBtn.onclick = () => {

    window.location.href = "bundles.html";

};

reportBtn.onclick = () => {

    window.location.href = "reports.html";

};

settingsBtn.onclick = () => {

    window.location.href = "settings.html";

};
