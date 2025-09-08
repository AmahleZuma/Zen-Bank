const transactForm = document.getElementById("transact-form");
const newtransaction = document.getElementById("newtransaction");

transactForm.style.display = "none"

function hideTransactForm(){

    if (transactForm.style.display === "none"){
        transactForm.style.display = "flex";
    } else {
        transactForm.style.display = "none"
    }
};

newtransaction.addEventListener("click", () => {
    hideTransactForm()
})


