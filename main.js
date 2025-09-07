const transactForm = document.getElementById("transact-form")


function hideTransactForm(){
    if (transactForm.style.display === "none"){
        transactForm.style.display = "block";
    } else {
        transactForm.style.display = "none"
    }
}
