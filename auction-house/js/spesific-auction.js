const spesificAuctionItem = document.querySelector("#auction-container")

import {SPESIFIC_AUCTION} from "./settings/api.js";
import {getToken} from "./utils/storage.js";

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const auctionId = searchParam.get("post_id");
const accessToken = getToken();
console.log(auctionId)



async function getAuctionById() {
    const response = await fetch(`${SPESIFIC_AUCTION}/${auctionId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json", "Authorization": `Bearer ${accessToken}`
        }
    })
    const data = await  response.json()
    const {title, description, tags, media, created, endsAt, seller, name, email, avatar, id, count, amount} = data;
    spesificAuctionItem.innerHTML = `<div class="mt-8">
                <div class="border border-black-700 shadow rounded-xl p-4 max-w-4xl w-full mx-auto h-96 relative container">
                  <div class=" flex space-x-4">
                    <img class="h-36 w-36 object-contain" id="auction-img" src="${media}"/>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="text-3xl " id="auction-title">${title}</div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2  col-span-2 text-2xl" id="auction-pricing">Price: ${amount}</div>
                          <input type="tel" placeholder="amount" class="border-2 rounded w-48 "/>
                          <div class="h-10 text-center py-2  text-white bg-blue-400 rounded col-span-1 absolute w-48 right-12 mt-10 container  ">BID</div>
                        </div>
                        <div class="flex gap-4 text-xl">
                            <div>seller: ${seller}</div>
                            <div>bids: ${count}</div>
                            
                        
                        </div>
                        <div class="flex text-xl py-8 flex-col gap-6">
                            <div class="h-2  " id="auction-description">Posted: ${created}</div>
                                <div class="h-2 " id="auction-description">Ends: ${endsAt}</div>
                        </div>
                        <p class="py-8">description: ${description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`

}
getAuctionById()


