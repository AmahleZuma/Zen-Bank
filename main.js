const transactForm = document.getElementById("transact-form");
const newtransaction = document.getElementById("newtransaction");
const popupOverlay = document.getElementById("popup-overlay");
const closepopup = document.getElementById("close-btn");

// Show the overlay 

function showOverlay(){
    popupOverlay.style.display = "block";
};

// Hide the overlay 

function hideOverlay() {
    popupOverlay.style.display = "none";
};

// Event listeners


