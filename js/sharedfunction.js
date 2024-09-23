

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