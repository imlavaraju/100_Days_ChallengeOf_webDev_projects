
let zeroElement=document.getElementById("zero");

function onIncrement(){
    let oldvalue=parseInt(zeroElement.textContent);
    let newValue=parseInt(oldvalue+1);
    zeroElement.textContent=newValue;
}

function onDecrement(){
    let oldvalue=parseInt(zeroElement.textContent);
    let newValue=parseInt(oldvalue-1);
    zeroElement.textContent=newValue;
}

function onReset(){
    let oldvalue=parseInt(zeroElement.textContent);
    let newValue=parseInt(oldvalue-oldvalue);
    zeroElement.textContent=newValue;   
}