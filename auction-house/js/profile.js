import {MY_PROFILE} from "./settings/api.js";
import {getUserName} from "./utils/storage.js";

import {getToken} from "./utils/storage.js";
const accessToken = getToken();
console.log("token of user: ", accessToken)

console.log(MY_PROFILE)
const profileName = document.querySelector("#user-name");
const userGmail = document.querySelector("#user-gmail");
const userBalance = document.querySelector("#user-balance");
const userAuctionWins = document.querySelector("#user-auction-wins");
const userAmountOfListings = document.querySelector("#user-auction-amount");
const profileContainer = document.querySelector("#auction-container")

const errorMessage = document.querySelector(".posts__notification ")

if (!accessToken) {
    location.href = "/login.html"
}

profileName.innerHTML = getUserName();



