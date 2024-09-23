

document.getElementById('donate-submit')
    .addEventListener('click', function (event) {
        event.preventDefault();
        
        const donateMony = getInputValueById('input-amount-one');
        const availableBalance = getInnerTextById('available-balance');
        const receivedFundOne = getInnerTextById('received-fund-one')

        const donateAddMonyOne = donateMony + receivedFundOne;
        const newBalance = availableBalance - donateMony;

        document.getElementById('received-fund-one').innerText = donateAddMonyOne;

        document.getElementById('available-balance').innerText = newBalance
    })