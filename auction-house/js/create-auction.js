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
    const listingImg = [listImgOne.value];

    const listingData = {
        "title": listingTitle.value.trim(),
        ""
    }



})
