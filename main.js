const transactForm = document.getElementById("transact-form");
const newtransaction = document.getElementById("newtransaction");
const popupOverlay = document.getElementById("popup-overlay");
const closepopup = document.getElementById("close-btn");
const recentHistory = document.getElementById("hist-chart");
const entriesContainer = document.getElementById("entries-container");
const submitOrder = document.getElementById("submit-order"); // this is a constant and can never change
const balance = document.getElementById("balance");


// Show the balance
function showBalance() {
    balance.innerHTML = "R500,00";

}


// This tells us that the submit button has been clicked
submitOrder.addEventListener("click", function checkOrderSubmit() {
    console.log("Your order has been submitted and will be processed right now!")
})

//information from the submission form:
submitOrder.addEventListener("click", function transactInfo() {

    // first bucket the values will drip into
    let recName = document.getElementById("name").value.trim(); // name of the person you want to send money to (recipient)
    let recEmail = document.getElementById("email").value.trim(); // email of the person you want to send money to (also recipient incase you forgot)
    let transactType = document.getElementById("transaction-type").value; // you putting money in, taking money out or paying or receiving?
    let transactAmount = document.getElementById("amount").value.trim();
    let transactSelfRef = document.getElementById("self-reference").value.trim();
    let transactRef = document.getElementById("reference").value.trim();
    

    // just leaving a comment here, too busy studying to code right now
   if (!transactType) {
        alert("Please select a transaction type");
        return;
   };


   // saving the vars into an object
   const formData = {
    name: recName,
    email: recEmail,
    transaction: transactType,
    amount: transactAmount,
    selfref: transactSelfRef,
    reference: transactRef,
   };

   localStorage.setItem('transactionFormData', JSON.stringify(formData));

   alert('Transaction complete!')


})

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
showBalance();

/*
TODO
I need to make a function that:
1. makes a new div
2. edits the elements accordingly(Transaction Type + Reference, Date, Amount)

*/