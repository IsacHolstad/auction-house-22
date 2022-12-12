import {getToken} from "./utils/storage.js";
import {CREATE_AUCTION, AUCTION_LISTINGS} from "./settings/api.js";

const createListingForm = document.querySelector("#create-listing-form");

const listingTitle = document.querySelector("#listingTitle");
const listDescription = document.querySelector("#listDescription");
const listTagOne = document.querySelector("#listTagOne");
const listTagTwo = document.querySelector("#listTagTwo");
const listTagThree = document.querySelector("#listTagThree");
const listImgOne = document.querySelector("#listImgOne");
const listingEndDate = document.querySelector("#listingEndDate");

createListingForm.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("i clicked the create button")

    const listingTags = [listTagOne.value, listTagTwo.value, listTagThree.value];
    const listingImages = [listImgOne.value];

    const listingData = {
        "title": listingTitle.value.trim(),
        "description": listDescription.value.trim(),
        "tags": listingTags,
        "media": listingImages.length > 0 ? listingImages : null,
        "endsAt": listingEndDate.value
    }
    console.log("auction was made successfully", listingData)

    const accessToken = getToken()
    async function createAuctionListing() {
        const response = await fetch(CREATE_AUCTION, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(listingData)
        })
        console.log("auction creation listing response", response)
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log("post was successfully created!!")
        } else{
            const error = await response.json();
            console.log(error);
            console.log("post was failed to creat!!")
        }
        createListingForm.reset();
    }
    createAuctionListing();



});
