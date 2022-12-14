import moment from "moment";
console.log(moment)
import {getToken} from "./utils/storage.js";
const accessToken = getToken
console.log("User Token: ", accessToken())

import {MY_AUCTIONS} from "./settings/api.js";
import {getUserName} from "./utils/storage.js";

console.log(MY_AUCTIONS)
console.log(getUserName())
