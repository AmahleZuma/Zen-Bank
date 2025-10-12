import { displayTransaction } from "./transactiondisplay.js";


const transactForm = document.getElementById("transact-form");
const newtransaction = document.getElementById("newtransaction");
const popupOverlay = document.getElementById("popup-overlay");
const closepopup = document.getElementById("close-btn");
const recentHistory = document.getElementById("hist-chart");
const entriesContainer = document.getElementById("entries-container");
const submitOrder = document.getElementById("submit-order"); // this is a constant and can never change
const balance = document.getElementById("balance");

// History chart has to accomodate the entry container
recentHistory.style.width = "800px";

// Try make the entries container smaller
entriesContainer.style.width = "750px";



let currentBalance = parseInt(localStorage.getItem('currentBalance')) || 10000

function updateBalance(newBalance) {
    currentBalance = newBalance;
    localStorage.setItem('currentBalance', newBalance)
    showBalance(currentBalance);
}



// Show the balance
function showBalance(monetaryValue) {
   if (monetaryValue !== undefined) {
    currentBalance = monetaryValue;
   }
    
    balance.innerHTML = "R" + currentBalance.toString();

}


// This tells us that the submit button has been clicked
submitOrder.addEventListener("click", function checkOrderSubmit(e) {
    e.preventDefault();
    console.log("Your order has been submitted and will be processed right now!")
})

//information from the submission form:
submitOrder.addEventListener("click", function transactInfo(e) {

    e.preventDefault();

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
   

   

   saveTransactData(formData);
   //  Transacthistory display goes here
   displayTransaction("entries-container") // calling it here so that the entries container will update...I fucking hate this project

   if (transactType === "pay") {
    let amountToDeduct = parseInt(transactAmount);

    if (isNaN(amountToDeduct)) {
        alert("Please input a valid Number!");
        return;
    }

    let newBalance = currentBalance - amountToDeduct;


   updateBalance(newBalance)


   } else{
    alert("Requesting please wait!");
   };

   
    hideOverlay(); // Close the popup
    transactForm.reset(); // Clear all form inputs


   return
})


// trying to get the formData into the function, pushed to an array in local storage
function saveTransactData(transactData) {
    
    // This is the local storage data 
    let formDataStorage = localStorage.getItem('transactionFormData');
    // This is the object the data is stored in
    let transactionData = transactData;
    // This is the array that stores the objects
    let transactHistory;

    // checks if local storage is empty and then adds data to the array and stringifys it
    if (formDataStorage === null) {
        transactHistory = [];
        transactHistory.push(transactionData);
        localStorage.setItem('transactionFormData', JSON.stringify(transactHistory));
    // Or else we assign the local storage item to the array and push in our data
    } else {
        transactHistory = JSON.parse(formDataStorage);
        transactHistory.push(transactionData);
        localStorage.setItem('transactionFormData', JSON.stringify(transactHistory));
    }
    
    
};




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


showBalance();
//  Transacthistory display goes here
displayTransaction("entries-container")


