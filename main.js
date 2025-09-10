const transactForm = document.getElementById("transact-form");
const newtransaction = document.getElementById("newtransaction");
const popupOverlay = document.getElementById("popup-overlay");
const closepopup = document.getElementById("close-btn");
const recentHistory = document.getElementById("hist-chart");
const entriesContainer = document.getElementById("entries-container");

// Making a div for entries
var entryThree = document.createElement("div");
entryThree.innerHTML = "Hello World";
entryThree.style.display = "flex"; // Flex display
entryThree.style.padding = "15px"; // Same padding as the css hardcoded ones
entriesContainer.prepend(entryThree); // Adding the div before the others as opposed to after

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

/*
TODO
I need to make a function that:
1. makes a new div
2. edits the elements accordingly(Transaction Type + Reference, Date, Amount)

*/