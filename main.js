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
   

   

   saveTransactData(formData);
  

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

// This function is meant to take the data and transfer it to the history tab
function transferTransactHistory() {
    // LocalStorage data
    let  transactData = localStorage.getItem('transactionFormData');
    // We are unlocking the data
    let transactHistory = JSON.parse(transactData);

    // If there is no data then we let it be
    if (transactData === null) {
        console.log("There is no data");
    // or else we loop through it and log it on the console
    } else {
        
        // this should not only log the data to the console but also create a div, put the info and prepend it
        for (i = 0; i < transactHistory.length; i++){
            console.log(transactHistory[i]);
            let histList = document.createElement("div");
            histList.innerHTML = JSON.stringify(transactHistory[i]) // will hopefully convert to string as innerhtml only accepts string
            entriesContainer.prepend(histList); 
        } // TODO: Find a way to specifically take only the value of the object
    }

}

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
transferTransactHistory();


/*
TODO
I need to make a function that:
1. makes a new div
2. edits the elements accordingly(Transaction Type + Reference, Date, Amount)

*/

// Have to study today so I will write some code tomorrow