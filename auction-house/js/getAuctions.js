import moment from "moment";
import {getToken} from "./utils/storage.js";
import {AUCTION_LISTINGS} from "./settings/api.js";

console.log(AUCTION_LISTINGS)

const accessToken = getToken()

if (!accessToken) {
    location.href = "/login.html"
}
(async function getAuctions() {
    try{
        const res = await fetch(AUCTION_LISTINGS);
        const resJSON = await res.json();
        const auctionsListings = resJSON.data;
        for (let y = 0; y < resJSON.length; y++){
            console.log("id of auctions:", resJSON[y].id)
        }
    }catch(error) {
        console.log(error)
    }

})()

