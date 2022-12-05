import moment from "moment";
import {getToken} from "./utils/storage.js";
import {AUCTION_LISTINGS} from "./settings/api.js";

console.log(AUCTION_LISTINGS)

const container = document.querySelector("#auction-container");
const postNotificationMessage = document.querySelector(".posts__notification")

const accessToken = getToken()

if (!accessToken) {
    location.href = "/login.html"
}

(async function getAuctions() {
    const response = await fetch(AUCTION_LISTINGS, {
        method: "GET",
        headers: {
            "Content_Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    if (response.ok) {
        const auctions = await response.json();
        let now = moment(new Date());
        if (!auctions.length) {
            postNotificationMessage.innerHTML = `Sorry, Feed Is Empty`;
        } else{
            const listOfAuctions = auctions.map((post) =>{
                const auctionTitle = post.title;
                const auctionDescription = post.description;
                const auctionImage = post.media;
                const auctionTags = post.tags;
                //const auctionCreated = post.created;
               // const auctionUpdated = post.updated;
                //const auctionEnding = post.endsAt;
                //const auctionHolder = post.seller;
                //const auctionBidAmount = post.bids;
                //const auctionsBids = post.bids;
                return(`<div class="mt-8">
                <div class="border border-black-700 shadow rounded-xl p-4 max-w-2xl w-full mx-auto h-56">
                  <div class=" flex space-x-4">
                    <img class="h-36 w-36 object-contain " id="auction-img" src="${auctionImage}"></img>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="text-xl " id="auction-title">${auctionTitle}</div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-300 rounded col-span-2" id="auction-pricing"></div>
                          <a href="spesific-listing.html">
                          <div class="h-10 text-center py-2  text-white bg-blue-400 rounded col-span-1">BID</div>
                          </a>
                        </div>
                        <div class="h-2" id="auction-description">Ends: now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`)

            }).join('')
            container.insertAdjacentHTML('beforeend', listOfAuctions)
        }
    }else{
        const err = await response.json();
        const messge = `Error happening${err} `
        throw new Error(message)
    }
})().catch(err =>{
    postNotificationMessage.innerHTML = err
});

































