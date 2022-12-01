import moment from "moment";
import {getToken} from "./utils/storage.js";

const accessToken = getToken()

if (!accessToken) {
    location.href = "/login.html"
}
const auctionImg = document.querySelector("#auction-img")