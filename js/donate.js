
document.getElementById('donate-submit')
    .addEventListener('click', function () {
        

        const donateMony = getInputValueById('input-amount-one');
        const availableBalance = getInnerTextById('available-balance');
        const receivedFundOne = getInnerTextById('received-fund-one');

        if(isNaN(donateMony)){
            
            alert('Please provide the number');
            

            

        } else if(availableBalance < donateMony){
            alert("You don't have enough balance")
        } else if(donateMony < 0){
            alert('You have entered negative numbers');
            
        
        } else{


            const donateAddMonyOne = donateMony + receivedFundOne;
        const newBalance = availableBalance - donateMony;

        document.getElementById('received-fund-one').innerText = donateAddMonyOne;

        document.getElementById('available-balance').innerText = newBalance;
            
        const modal = document.getElementById('my_modal_1');
        modal.showModal();

                }
                
            })