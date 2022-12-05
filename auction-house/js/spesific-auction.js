const spesificAuctionItem = document.querySelector("#auction-container")

import {SPESIFIC_AUCTION} from "./settings/api.js";
import {getToken} from "./utils/storage.js";

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const auctionId = searchParam.get("id");

const accessToken = getToken();

async function getAuctionById() {
    const response = await fetch(`${SPESIFIC_AUCTION}/${"id"}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json", "Authorization": `Bearer ${accessToken}`
        }
    })
    const data = await  response.json()
    const {title, description, tags, media, created, updated, endsAt, seller, id} = data;
    spesificAuctionItem.innerHTML = `<div class="mt-8">
                <div class="border border-black-700 shadow rounded-xl p-4 max-w-2xl w-full mx-auto h-56">
                  <div class=" flex space-x-4">
                    <img class="h-36 w-36 object-contain" id="auction-img" src="${media}"></img>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="text-xl " id="auction-title">${title}</div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-300 rounded col-span-2" id="auction-pricing"></div>
                          <a href="spesific-listing.html">
                          <div class="h-10 text-center py-2  text-white bg-blue-400 rounded col-span-1">BID</div>
                          </a>
                        </div>
                        <div class="h-2" id="auction-description">Ends: ${endsAt}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`

}
getAuctionById()


