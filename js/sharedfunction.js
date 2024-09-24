

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
    
}



function getInnerTextById(id){
    const innerValue = document.getElementById(id).innerText;
    const innerNumber = parseFloat(innerValue)
    return innerNumber;
    
}

function showSectionById(id){

    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('donation-history').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

document.getElementById('home-btn').addEventListener('click', function(){

    window.location.href = '/home.html'
})