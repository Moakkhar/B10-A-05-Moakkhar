
document.getElementById('donate-submit')
    .addEventListener('click', function () {
        

        const donateMony = getInputValueById('input-amount-one');
        const availableBalance = getInnerTextById('available-balance');
        const receivedFundOne = getInnerTextById('received-fund-one');

        if(isNaN(donateMony)){
            
            alert('Please provide the number');
            

            

        } else if(availableBalance < donateMony){
            alert("You don't have enough balance")
        } else if(donateMony <= 0){
            alert('You have entered zero or negative numbers');
            
        
        } else{


            const donateAddMonyOne = donateMony + receivedFundOne;
        const newBalance = availableBalance - donateMony;

        document.getElementById('received-fund-one').innerText = donateAddMonyOne;

        document.getElementById('available-balance').innerText = newBalance;

        // Transection History strat
            const headingNoakhali = document.getElementById('donate-noakhali').innerText;

        // const p = document.createElement('p');
        // p.innerText = `Donated: ${donateMony} Tk. ${headingNoakhali} and New Balance: ${newBalance}`;
        // document.getElementById('donate-history-container').appendChild(p);

         // Get the current date and time
         const now = new Date();
         const formattedDate = now.toISOString().slice(0, 10); // YYYY-MM-DD
         const formattedTime = now.toTimeString().slice(0, 8); // HH:MM:SS
         
         // Create a new transaction record
        //  const transactionRecord = `Donated: ${donateMony} Tk. ${headingNoakhali} and New Balance: ${newBalance} | Date: ${formattedDate} | Time: ${formattedTime}`;
        

        const div = document.createElement('div');
        div.classList.add('border-2')
        div.classList.add('rounded-3xl')
        div.innerHTML = `
        
            <h2 class="text-xl font-bold p-2">Donated: ${donateMony} Tk. ${headingNoakhali} and New Balance: ${newBalance}</h2>
            <p class= "text-center pb-2">Date: ${formattedDate} | Time: ${formattedTime}</p>
        `;

        document.getElementById('donate-history-container').appendChild(div);
 
         // Append transaction to history
        //  const transactionHistoryList = document.getElementById('donate-history-container');
        //  const newTransactionItem = document.createElement('p');
        //  newTransactionItem.textContent = transactionRecord;
        //  transactionHistoryList.appendChild(newTransactionItem);

    
        // Transection History end
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

                }
                
            })