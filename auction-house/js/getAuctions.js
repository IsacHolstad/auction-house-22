import moment from "moment";
import {getToken} from "./utils/storage.js";
import {AUCTION_LISTINGS} from "./settings/api.js";

console.log(AUCTION_LISTINGS)

const container = document.querySelector("#auction-container");

const accessToken = getToken()

if (!accessToken) {
    location.href = "/login.html"
}
(async function getAuctions() {
    try {
        const res = await fetch(AUCTION_LISTINGS);
        const resJSON = await res.json();
        const auctionsListings = resJSON.data;
        for (let y = 0; y < resJSON.length; y++) {
            console.log("id of auctions:", resJSON[y].id)
            console.log("title of auctions: ", resJSON[y].title)
            container.innerHTML += `<div class="mt-8">
                <div class="border border-black-700 shadow rounded-xl p-4 max-w-2xl w-full mx-auto h-56">
                  <div class=" flex space-x-4">
                    <img class=" bg-slate-300 h-32 w-32" id="auction-img" src="${resJSON[y].media}"></img>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="text-xl " id="auction-title">${resJSON[y].title}</div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-300 rounded col-span-2" id="auction-pricing"></div>
                          <div class="h-10 text-center py-2  text-white bg-blue-400 rounded col-span-1">BID</div>
                        </div>
                        <div class="h-2 bg-slate-300 rounded" id="auction-description"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
        }
    } catch (error) {
        console.log(error)
    }

})()

