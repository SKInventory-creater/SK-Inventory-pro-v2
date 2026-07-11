import {
    createItem,
    getItems
} from "../firebase/firestore.js";


const itemForm = document.getElementById("itemForm");

const itemCodeInput = document.getElementById("itemCode");
const itemNameInput = document.getElementById("itemName");
const costPriceInput = document.getElementById("costPrice");
const sellingPriceInput = document.getElementById("sellingPrice");

const itemList = document.getElementById("itemList");
const itemMessage = document.getElementById("itemMessage");

const backBtn = document.getElementById("backBtn");


// Get Bundle ID

const params = new URLSearchParams(
    window.location.search
);

const bundleId = params.get("bundle");


// Initialize

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadItems();

    }
);


// Add Item

itemForm?.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();


        const data = {

            bundleId,

            code:
                itemCodeInput.value.trim(),

            name:
                itemNameInput.value.trim(),

            costPrice:
                Number(costPriceInput.value),

            sellingPrice:
                Number(sellingPriceInput.value),

            sold:
                false

        };


        try {

            await createItem(data);


            itemMessage.textContent =
                "အထည် သိမ်းပြီးပါပြီ";


            itemForm.reset();


            loadItems();


        } catch(error) {

            console.error(error);


            itemMessage.textContent =
                "သိမ်းမရပါ။";

        }


    }
);


// Load Items

async function loadItems(){


    if(!bundleId){

        itemList.innerHTML =
        `
        <div class="empty-state">
            Bundle မရွေးထားပါ။
        </div>
        `;

        return;

    }


    itemList.innerHTML =
        "<p>Loading...</p>";


    try {


        const snapshot =
            await getItems(bundleId);


        itemList.innerHTML = "";


        if(snapshot.empty){

            itemList.innerHTML =
            `
            <div class="empty-state">
                အထည် မရှိသေးပါ။
            </div>
            `;

            return;

        }


        snapshot.forEach(doc => {


            const item =
                doc.data();


            const card =
                document.createElement("div");


            card.className =
                "item-card";


            card.innerHTML =
            `

            <div class="item-code">
                ${item.code}
            </div>


            <div class="item-info">
                ${item.name || "-"}
            </div>


            <div class="item-info">
                Cost:
                ${item.costPrice}
            </div>


            <div class="item-info">
                Sale:
                ${item.sellingPrice}
            </div>


            <div class="item-status ${
                item.sold
                ? "sold"
                : "available"
            }">

                ${
                    item.sold
                    ? "ရောင်းပြီး"
                    : "လက်ကျန်"
                }

            </div>

            `;


            itemList.appendChild(card);


        });


    } catch(error){

        console.error(error);

        itemList.innerHTML =
        `
        <div class="empty-state">
            Data ဖတ်မရပါ။
        </div>
        `;

    }

}


// Back

backBtn.onclick = () => {

    window.location.href =
        "bundles.html";

};
