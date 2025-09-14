const transactForm = document.getElementById("transact-form");
const newtransaction = document.getElementById("newtransaction");
const popupOverlay = document.getElementById("popup-overlay");
const closepopup = document.getElementById("close-btn");
const recentHistory = document.getElementById("hist-chart");
const entriesContainer = document.getElementById("entries-container");
const submitOrder = document.getElementById("submit-order");

//information from the submission form:
let recName = document.getElementById("name"); // name of the person you want to send money to (recipient)
let recEmail = document.getElementById("email"); // email of the person you want to send money to (also recipient incase you forgot)
let transactType = document.getElementById("transaction-type"); // you putting money in, taking money out or paying or receiving?
let transactTypePay = document.getElementById("pay");
let transactTypeRequest = document.getElementById("request");
let transactTypeWithdraw = document.getElementById("withdraw");
let transactTypeDeposit = document.getElementById("deposit");
let transactAmount = document.getElementById("amount");
let transactSelfRef = document.getElementById("self-reference");
let transactRef = document.getElementById("reference");
let transactSubmit = document.getElementById("submit");


// Making a div for entries
// It has to be made by a function whenever a transaction has been submitted
function listHistory() {
    let entryThree = document.createElement("div");
    entryThree.innerHTML = "Hello World";
    entryThree.style.display = "flex"; // Flex display
    entryThree.style.padding = "15px"; // Same padding as the css hardcoded ones
    entryThree.style.flexDirection = "row"; // row flex direction
    entryThree.style.justifyContent = "space between"; 
    entriesContainer.prepend(entryThree); // Adding the div before the others as opposed to after
}


// This tells us that the submit button has been clicked
submitOrder.addEventListener("click", function checkOrderSubmit() {
    console.log("Your order has been submitted and will be processed right now!")
})

// Show the overlay 
function showOverlay(){
    popupOverlay.style.display = "block";
};

// Hide the overlay 

function hideOverlay() {
    popupOverlay.style.display = "none";
};

// Event listeners
newtransaction.addEventListener("click", showOverlay);
closepopup.addEventListener("click", hideOverlay);

popupOverlay.addEventListener("click", function(e) {
    if (e.target === popupOverlay) {
        hideOverlay()
    }
});

listHistory();

/*
TODO
I need to make a function that:
1. makes a new div
2. edits the elements accordingly(Transaction Type + Reference, Date, Amount)

*/