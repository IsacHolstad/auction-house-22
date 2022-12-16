import moment from "moment";
let now = moment(new Date())
import {getToken} from "./utils/storage.js";

const accessToken = getToken();

import {MY_AUCTIONS, DELETE_USER_AUCTION_BY_ID} from "./settings/api.js";
import {getUserName} from "./utils/storage.js";

console.log(getUserName())


const myAuctions = document.querySelector("#my-auctions");
const auctionNotificationMessage = document.querySelector(".posts__notification");

async function getUserAuctions() {
    const response = await fetch(MY_AUCTIONS, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        },

    })
    if (response.ok) {
        const jsonResponse = await response.json()
        myAuctions.innerHTML = "";
        const {auctions} = jsonResponse;
        if (!auctions.length) {
            auctionNotificationMessage.innerHTML = `<h3 class="text-red-300 text-center mt-8">You don't have any auctions</h3>
                <a href="./create-auction.html" class=" animate-bounce bg-blue-600 block text-center rounded-xl mx-auto mt-32 text-white text-3xl drop-shadow-xl p-4 w-96">Click to make auction</a>`
        } else{
            const numberOfAuctions = auctions.length;
            for (let i = 0; i < numberOfAuctions; i++) {
                const {created} = auctions[i];
                const minutesSinceCreated = now.diff(created, "minutes");
                myAuctions.innerHTML += `<div class="mt-8 container">
                            <div class="border border-black-700 shadow rounded-xl p-4 max-w-3xl w-full mx-auto h-56">
                              <div class=" flex space-x-4">
                                <img class="h-36 w-36 object-contain " id="auction-img" src="${auctions[i].media}" alt="auction image"/>
                                <div class="flex-1 space-y-6 py-1">
                                  <div class="text-2xl " id="auction-title">${auctions[i].Title}</div>
                                  <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                      <div class="h-2  col-span-2 text-xl" id="auction-pricing">Bids: ${auctions[i]._count.bids}</div>
                                      <button
                                       class=" delete.auction-button h-10 text-center py-2  text-white bg-red-400 rounded col-span-1"
                                       type="button"
                                       
                                       >Delete</button>

                                    </div>
                                    <div>
                                    <div class="h-2 py-4" id="auction-description">Auction Ends: ${minutesSinceCreated}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>`
            }
        }
    }else {
        auctionNotificationMessage.innerHTML = await response.json();
    }
}


getUserAuctions().then(() =>{
    handleDeleteButtonEvent();
})

function handleDeleteButtonEvent() {
    let deleteButtons = document.getElementsByClassName('delete-auction-button');
    const totalNumbersOfDeleteBtns = deleteButtons.length;
    for (let i = 0; i < totalNumbersOfDeleteBtns; i++) {
        deleteButtons[i].addEventListener('click', function () {
            const auctionId = this.dataset.id;
            handleDeleteAuctionById(auctionId)
        });
    }
}

function handleDeleteAuctionById(id) {
    const deleteUserById = async () => {
        try {
            let response = await fetch(`${DELETE_USER_AUCTION_BY_ID}/${id}`, {

                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }

            });
            if (response.status === 200) {
                getUserAuctions().then(() => {
                    handleDeleteButtonEvent()
                });

            } else {
                const err = await response.json()
                const message = `Sorry post could not be deleted ${err}`
                throw Error(message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    deleteUserById().then(r => {
        console.log(r)

    });
}
