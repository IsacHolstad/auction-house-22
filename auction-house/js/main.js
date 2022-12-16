import '../style.css'
import {clearStorage} from "./utils/storage.js";
import creatNavigation from "./components/createNavigation.js"

creatNavigation();

const logOutBtn = document.querySelector("#logout-button");

if (logOutBtn) {
    logOutBtn.addEventListener("click", function () {
        clearStorage();
        window.location.replace("/login.html")
    })
}
