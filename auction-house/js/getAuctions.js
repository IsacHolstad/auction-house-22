import moment from "moment";
import {getToken} from "./utils/storage.js";
import {AUCTION_LISTINGS} from "./settings/api.js";

console.log(AUCTION_LISTINGS)

const accessToken = getToken()

if (!accessToken) {
    location.href = "/login.html"
}
const auctionImg = document.querySelector("#auction-img")
const auctionTitle = document.querySelector("#auction-title")
const auctionDescription = document.querySelector("#auction-description")
const auctionPricing = document.querySelector("#auction-pricing")