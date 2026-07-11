import {
    createBundle,
    getBundles
} from "../firebase/firestore.js";

const bundleForm = document.getElementById("bundleForm");

const bundleNoInput = document.getElementById("bundleNo");
const supplierInput = document.getElementById("supplier");

const bundleList = document.getElementById("bundleList");
const bundleMessage = document.getElementById("bundleMessage");

const backBtn = document.getElementById("backBtn");


// Initialize

document.addEventListener("DOMContentLoaded", () => {

    loadBundles();

});


// Create Bundle

bundleForm?.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();


        const data = {

            bundleNo:
                bundleNoInput.value.trim(),

            supplier:
                supplierInput.value.trim(),

            status:
                "Active"

        };


        try {

            await createBundle(data);


            bundleMessage.textContent =
                "ဘေထုတ် သိမ်းပြီးပါပြီ";


            bundleForm.reset();


            loadBundles();


        } catch(error) {

            console.error(error);


            bundleMessage.textContent =
                "သိမ်းမရပါ။ ထပ်မံကြိုးစားပါ";

        }

    }
);


// Load Bundle List

async function loadBundles(){

    bundleList.innerHTML =
        "<p>Loading...</p>";


    try {

        const snapshot =
            await getBundles();


        bundleList.innerHTML = "";


        if(snapshot.empty){

            bundleList.innerHTML =
                `<div class="empty-state">
                    ဘေထုတ် မရှိသေးပါ။
                </div>`;

            return;

        }


        snapshot.forEach(doc => {


            const bundle =
                doc.data();


            const card =
                document.createElement("div");


            card.className =
                "bundle-card";


            card.innerHTML = `

                <div class="bundle-title">
                    ${bundle.bundleNo}
                </div>

                <div class="bundle-info">
                    Supplier :
                    ${bundle.supplier || "-"}
                </div>

                <div class="bundle-info">
                    Status :
                    ${bundle.status}
                </div>

            `;


            card.onclick = () => {

                window.location.href =
                    `items.html?bundle=${doc.id}`;

            };


            bundleList.appendChild(card);


        });


    } catch(error){

        console.error(error);


        bundleList.innerHTML =
            `<div class="empty-state">
                Data ဖတ်မရပါ။
            </div>`;

    }

}


// Back Button

backBtn.onclick = () => {

    window.location.href =
        "dashboard.html";

};
