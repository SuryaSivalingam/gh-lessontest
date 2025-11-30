function multiply(num1,num2){
    return num1*num2;
}

function add(n1,n2){
    const intNum1 = parseInt(n1,10);
    const intNum2 = parseInt(n2,10);
    return intNum1+intNum2;
}

function subtract(num1,num2){
    return num1-num2;
}

function divide(num1,num2){
    return num1/num2;
}

module.exports = {
    multiply,
    add,
    subtract,
    divide
}