import {getToken} from "./utils/storage.js";

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const listingId = searchParam.get("post_id");
const accessToken = getToken();

const auctionTitle = document.querySelector("#list-title")
const auctionID = document.querySelector("#list-id")
const auctionDesc = document.querySelector("#list-desc")
const auctionBids = document.querySelector("#list-bids")
const auctionImg = document.querySelector("#list-img")

async function getAuctionById() {
    const response = await fetch(`https://api.noroff.dev/api/v1/auction/listings/${listingId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }

    })
    const data = await response.json()
    auctionTitle.innerHTML = data.title
    auctionID.innerHTML = data.id
    auctionDesc.innerHTML = data.description
    auctionBids.innerHTML = data._count.bids
    auctionImg.innerHTML = data.media
}


getAuctionById().then(r => {
    console.log(r)
});

const auctionBidInput = document.querySelector("#listing-bid-input")
const biddingForm = document.querySelector("#bidding-form")

biddingForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const amountToBid = {
        "amount": parseInt(auctionBidInput.value)
    }

    async function bidOnAuction() {
        const response = await fetch(`https://api.noroff.dev/api/v1/auction/listings/${listingId}/bids`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(amountToBid)
        })
        if (response.ok) {
            alert("Bid is made")
            const data = await response.json();
        } else {
            alert("Bid failed")
            const error = await response.json();
        }
        biddingForm.reset();

    }

    bidOnAuction().then(e => {
        console.log(e)
    })
})
