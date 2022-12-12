import {getToken} from "./utils/storage.js";
import {CREATE_AUCTION, AUCTION_LISTINGS} from "./settings/api.js";

const createAuctionForm = document.querySelector("#create-auction-form")
const auctionTitle = document.querySelector("#auctionTitle")
const titleError = document.querySelector("#titleError")
const auctionDescription = document.querySelector("#auctionDescription")
const descriptionError = document.querySelector("#descriptionError")
const auctionImg = document.querySelector("#auctionImg")
const generalErrorMessage = document.querySelector("#general-error-message")

