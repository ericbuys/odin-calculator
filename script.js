function add(a, b) {
    return Math.round((a + b) * 100)/100;
}

function subtract(a, b) {
    return Math.round((a - b) * 100)/100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100)/100;
}

function divide(a, b) {
    return Math.round((a / b) * 100)/100;
}

function operate(operator, a, b) {
    if(operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '/') {
        return divide(a, b);
    }
    else {
        return "Invalid Operator";
    }
}