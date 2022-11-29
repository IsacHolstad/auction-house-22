const API_BASE_URL = "https://nf-api.onrender.com/"

const USER_REGISTER_URL = API_BASE_URL + "/api/v1/auction/auth/register"
const USER_LOGIN = API_BASE_URL + "/api/v1/auction/auth/login"
const AUCTION_LISTINGS = API_BASE_URL + "/api/v1/auction/listings"
const POST_AUCTION = API_BASE_URL + "/api/v1/auction/listings"


// TODO  update auction = "/api/v1/auction/listings/<id>"
//TODO delete auction = "/api/v1/auction/listings/<id>

//TODO get single list item use /api/auction/listings/<id>

export{
    USER_REGISTER_URL,
    API_BASE_URL,
    USER_LOGIN,
    AUCTION_LISTINGS,
    POST_AUCTION

}
