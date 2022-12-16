import moment from "moment";
import {getToken} from "./utils/storage.js";
import {AUCTION_LISTINGS} from "./settings/api.js";


const container = document.querySelector("#auction-container");
const postNotificationMessage = document.querySelector(".posts__notification")

const accessToken = getToken();

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
                const auctionImage = post.media;
                const auctionTags = post.tags;
                const auctionEnding = post.endsAt;
                const minutesToEnds = now.diff(auctionEnding, 'hours')
                const auctionCreated = post.created;
                const auctionUpdated = post.updated;
                const auctionPrice = post._count.bids
                const auctionBidAmount = post._count.bids;
                const auctionsBids = post.bids;
                return(`<a href="./spesific-listing.html?post_id=${post.id}"><div class="mt-8 container">
                            <div class="border border-black-700 shadow rounded-xl p-4 max-w-3xl w-full mx-auto h-56">
                              <div class=" flex space-x-4">
                                <img class="h-36 w-36 object-contain " id="auction-img" src="${auctionImage}"/>
                                <div class="flex-1 space-y-6 py-1">
                                  <div class="text-2xl " id="auction-title">${auctionTitle}</div>
                                  <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                      <div class="h-2  col-span-2 text-xl" id="auction-pricing">Bids: ${post._count.bids}</div>
                                      <button class="h-10 text-center py-2  text-white bg-blue-400 rounded col-span-1">BID</button>
                                    </div>
                                    <div>
                                    <div class="h-2 py-4" id="auction-description">Auction Ends in: ${minutesToEnds} minutes</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>`)

            }).join('')
            container.insertAdjacentHTML('beforeend', listOfAuctions)
        }
    }else{
        const err = await response.json();
        const message = `Error happening${err} `
        throw new Error(message)
    }
})().catch(err =>{
    postNotificationMessage.innerHTML = err
});
