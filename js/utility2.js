
document.getElementById('donate-submit-two')
    .addEventListener('click', function () {
        

        const donateMony = getInputValueById('input-amount-two');
        const availableBalance = getInnerTextById('available-balance');
        const receivedFundOne = getInnerTextById('received-fund-two');

        if(isNaN(donateMony)){
            
            alert('Please provide the number');
            

            

        } else if(availableBalance < donateMony){
            alert("You don't have enough balance")
        } else if(donateMony <= 0){
            alert('You have entered zero or negative numbers');
            
        
        } else{


            const donateAddMonyTwo = donateMony + receivedFundOne;
        const newBalance = availableBalance - donateMony;

        document.getElementById('received-fund-two').innerText = donateAddMonyTwo;

        document.getElementById('available-balance').innerText = newBalance;

        // Transection History strat
            const headingFeni = document.getElementById('donate-feni').innerText;

        // const p = document.createElement('p');
        // p.innerText = `Donated: ${donateMony} Tk. ${headingNoakhali} and New Balance: ${newBalance}`;
        // document.getElementById('donate-history-container').appendChild(p);

         // Get the current date and time
         const now = new Date();
         const formattedDate = now.toISOString().slice(0, 10); // YYYY-MM-DD
         const formattedTime = now.toTimeString().slice(0, 8); // HH:MM:SS
         
         // Create a new transaction record
         const transactionRecord = `Donated: ${donateMony} Tk. ${headingFeni} and New Balance: ${newBalance} | Date: ${formattedDate} | Time: ${formattedTime}`;
 
         // Append transaction to history
         const transactionHistoryList = document.getElementById('donate-history-container');
         const newTransactionItem = document.createElement('p');
         newTransactionItem.textContent = transactionRecord;
         transactionHistoryList.appendChild(newTransactionItem);

    
        // Transection History end
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

                }
                
            })