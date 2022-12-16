import {getToken} from "./utils/storage.js";
import {CREATE_AUCTION} from "./settings/api.js";

const createListingForm = document.querySelector("#create-listing-form");

const listingTitle = document.querySelector("#listingTitle");
const listDescription = document.querySelector("#listDescription");
const listTagOne = document.querySelector("#listTagOne");
const listTagTwo = document.querySelector("#listTagTwo");
const listTagThree = document.querySelector("#listTagThree");
const listImgOne = document.querySelector("#listImgOne");
const listingEndDate = document.querySelector("#listingEndDate");

const accessToken = getToken();

if (!accessToken) {
    location.href = "/login.html"
}

createListingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const listingTags = [listTagOne.value, listTagTwo.value, listTagThree.value];
    const listingImages = [listImgOne.value];

    let listingData;

    if (listingImages[0] !== "") {
        listingData = {
            "title": listingTitle.value.trim(),
            "description": listDescription.value.trim(),
            "tags": listingTags,
            "media": listingImages,
            "endsAt": listingEndDate.value
        }

    } else {
        listingData = {
            "title": listingTitle.value.trim(),
            "description": listDescription.value.trim(),
            "tags": listingTags,
            "endsAt": listingEndDate.value
        }


    }

    const accessToken = getToken();

    async function createAuctionListing() {
        const response = await fetch(CREATE_AUCTION, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(listingData)
        })
        if (response.ok) {
            const data = await response.json();
            location.href = "/create-auction.html"
        } else {
            const error = await response.json();
            console.log(error);
            console.log("post was failed to creat!!")
        }
        createListingForm.reset();
    }

    createAuctionListing().catch()


});
