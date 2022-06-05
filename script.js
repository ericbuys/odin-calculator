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

const screenValue = document.querySelector('.screen');
//screenValue.textContent = "Hii"

//Adding Button funcationalit for 0-9
const numButtons = document.querySelectorAll('.btn');
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
numButtons.forEach((button) => {
    nums.forEach((num) => {
        if(button.classList.contains(num)) {
            button.addEventListener('click', () => {
                screenValue.textContent += num;
            });
        }
    });
});