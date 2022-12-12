const API_BASE_URL = `https://nf-api.onrender.com/`
import {getUserName} from "../utils/storage.js";
const userName = getUserName();

const USER_REGISTER_URL = API_BASE_URL + "api/v1/auction/auth/register"
const USER_LOGIN = API_BASE_URL + "api/v1/auction/auth/login"
const AUCTION_LISTINGS = API_BASE_URL + "api/v1/auction/listings"
const SPESIFIC_AUCTION = API_BASE_URL + "api/v1/auction/listings"
const CREATE_AUCTION = API_BASE_URL + "api/v1/auction/listings"




export{
    USER_REGISTER_URL,
    API_BASE_URL,
    USER_LOGIN,
    AUCTION_LISTINGS,
    SPESIFIC_AUCTION,
    CREATE_AUCTION,

}
