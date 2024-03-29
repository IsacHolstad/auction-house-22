import {getUserName} from "../utils/storage.js";

function createNavigation() {
    const {pathname} = document.location;
    const navBar = document.querySelector("#navigation");
    if (navBar) {
        const userName = getUserName();
        let navLinks;
        navLinks = `<li class="p-8"><a href="/signup.html" class="${pathname === "signup.html" ? "text-blue-900" : "hover:underline"}"</a>Sign Up </li>
                    <li class="p-8"><a href="/login.html" class="${pathname === "login.html" ? "text-blue-900" : "hover:underline"}"</a>Login  </li>`;
        if (userName) {
            navLinks = `
            <li class="p-8"><a href="index.html" class="${pathname === "/index.html" ? "text-blue-900" : " hover:underline"}">Home</a>
            </li>
            <li class="p-8">
                <a href="/create-auction.html" class="${pathname === "./creat-post.html" ? "text-blue-900" : "hover:underline"}">Create Auction</a>
            </li>
            <li class="p-8"><a href="./my-auction.html" class="${pathname === "/my-posts.html" ? "text-blue-900" : "hover:underline"}">My Auction</a>
            </li>
            <li class="p-8"><a href="profile.html"><span>Hey 👋 ${userName}</span></a></li>
            <li class="p-8"><button id="logout-button" class="text-red-500 hover:underline">
            Logout
            </button></li>`
        }
        navBar.innerHTML = `
        <ul class="flex text-sm container">
        ${navLinks}
        </ul>
        `
    }
}
export default createNavigation;
