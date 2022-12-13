import {SPESIFIC_AUCTION, AUCTION_LISTINGS} from "./settings/api.js";
import {getToken} from "./utils/storage.js";

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const auctionId = searchParam.get("post_id");
const accessToken = getToken();
console.log(auctionId)

const auctionTitle = document.querySelector("#list-title")
const auctionID = document.querySelector("#list-id")
const auctionDesc = document.querySelector("#list-desc")
const auctionBids = document.querySelector("#list-bids")

async function getuctionById() {
    const response = await fetch(`${SPESIFIC_AUCTION}/${auctionId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }

    })
    console.log(response)
    const data = await response.json()
    console.log(data)
    auctionTitle.innerHTML = data.title
    auctionID.innerHTML = data.id
    auctionDesc.innerHTML = data.description
    auctionBids.innerHTML = data._count.bids
}


getuctionById();

const auctionBidInput = document.querySelector("#listing-bid-input")
const biddingForm = document.querySelector("#bidding-form")

biddingForm.addEventListener("submit", function (event){
    event.preventDefault()
    console.log("listing bid input: ", auctionBidInput.value)

    const amountToBid = {
        "amount" : parseInt(auctionBidInput.value)
    }

    async function bidOnAuction() {
        const response = await fetch(`${SPESIFIC_AUCTION}/${auctionId}/bids`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(amountToBid)
    })
        console.log("amount to bid: ", response)
        if (response.ok) {
            alert("Bid is made")
            const data = await response.json();
            console.log(data);
            console.log("bid successfully made")
        } else {
            alert("Bid failed")
            const error = await response.json();
            console.log(error)
            console.log("bid was not succeeded")
        }
        biddingForm.reset();

    }
    bidOnAuction();
})




