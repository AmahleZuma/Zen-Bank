export function displayTransaction(containerID) {
    // LocalStorage data
    let  transactData = localStorage.getItem('transactionFormData');
    // We are unlocking the data
    let transactHistory = JSON.parse(transactData);
    // Writing the same thing twice sucks ass so I am making this const
    const container = document.getElementById(containerID)

    

    // If there is no data then we let it be
    if (transactData === null) {
        console.log("There is no data");
    // or else we loop through it and log it on the console
    } else {
        
        container.innerHTML = ''; // clear the entires to avoid duplicates
        // this should not only log the data to the console but also create a div, put the info and prepend it
        for (let i = 0; i < transactHistory.length; i++){
            let transaction = transactHistory[i]; // turning each object into a variable
            console.log(transactHistory[i]);
            console.log(transactHistory); // so this is an array of objects so I need to get to the specific object first
            let histList = document.createElement("div");
            let amountClass = transaction.transaction === "pay" ? "amount-red" : "amount-green";
            histList.className = "transaction-info";
            histList.innerHTML = `
                                       <p> Recipient: ${transaction.name} </p>
                                       <p> Type: ${transaction.transaction} </p> 
                                       <p> Reference: ${transaction.selfref} </p> 
                                       <p class="${amountClass}"> R ${transaction.amount} </p> 
                                       

                                  `; // displays as a div

            histList.style.marginLeft = "25px";
            histList.style.width = "900px"
            histList.style.padding = "15px"
            histList.style.display = "grid";
            histList.style.gridTemplateColumns = "2fr 2fr 2fr 2fr 2fr";
            histList.style.gap = "100px";                    
            container.prepend(histList); 
        } // TODO: Find a way to specifically take only the value of the object
    }

}