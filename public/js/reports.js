import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config.js";


const reportItemCount =
    document.getElementById("reportItemCount");

const reportSoldCount =
    document.getElementById("reportSoldCount");

const totalCost =
    document.getElementById("totalCost");

const totalProfit =
    document.getElementById("totalProfit");

const reportList =
    document.getElementById("reportList");

const backBtn =
    document.getElementById("backBtn");


document.addEventListener(
    "DOMContentLoaded",
    loadReport
);



async function loadReport(){

    try {

        const snapshot =
            await getDocs(
                collection(db, "items")
            );


        let itemCount = 0;
        let soldCount = 0;

        let cost = 0;
        let sale = 0;


        reportList.innerHTML = "";


        snapshot.forEach(doc => {


            const item =
                doc.data();


            itemCount++;


            cost +=
                Number(item.costPrice || 0);


            sale +=
                Number(item.sellingPrice || 0);



            if(item.sold){

                soldCount++;

            }



            const div =
                document.createElement("div");


            div.className =
                "report-item";


            div.innerHTML = `

                <div class="report-title">
                    ${item.code}
                </div>

                <div class="report-info">
                    Cost :
                    ${item.costPrice}
                </div>

                <div class="report-info">
                    Sale :
                    ${item.sellingPrice}
                </div>

                <div class="report-info">
                    Status :
                    ${
                        item.sold
                        ? "ရောင်းပြီး"
                        : "လက်ကျန်"
                    }
                </div>

            `;


            reportList.appendChild(div);


        });



        reportItemCount.textContent =
            itemCount;


        reportSoldCount.textContent =
            soldCount;


        totalCost.textContent =
            cost.toLocaleString();



        totalProfit.textContent =
            (sale - cost)
            .toLocaleString();



    }
    catch(error){

        console.error(error);

        reportList.innerHTML =
        `
        <div class="empty-state">
            Report ဖတ်မရပါ။
        </div>
        `;

    }

}



// Back Button

backBtn.onclick = () => {

    window.location.href =
        "dashboard.html";

};
