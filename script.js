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

function operate(a, operator, b) {
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

function checkScreen(input) {
    const equation = input.split(' ');
    console.log(equation.length);
    console.log(equation);
    if (equation.length == 1) {
        if(equation[0] == '') {
            console.log("too few numbers");
            return false;
        }
        else {
            return true;
        }
    }
    else if (equation.length == 3) {
        if(equation[2] == '') {
            console.log("incorrect spot");
            return false;
        }
        else {
            const result = operate(parseInt(equation[0]), equation[1], parseInt(equation[2]));
            const screenValue = document.querySelector('.screen');
            screenValue.textContent = result;
            return true;
        }
    }
    else {
        return true;
    }

}

const screenValue = document.querySelector('.screen');

//Adding Button funcationality for 0-9
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

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    if(checkScreen(screenValue.textContent)) {
        screenValue.textContent += ' + ';
    }
    else {
        addBtn.classList.add('error');

        setTimeout(function(){
            addBtn.classList.remove('error');
        }, 500);
    }
});

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {
    if(checkScreen(screenValue.textContent)) {
        screenValue.textContent += ' - ';
    }
    else {
        subtractBtn.classList.add('error');

        setTimeout(function(){
            subtractBtn.classList.remove('error');
        }, 500);
    }
    
});

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => {
    if(checkScreen(screenValue.textContent)) {
        screenValue.textContent += ' * ';
    }
    else {
        multiplyBtn.classList.add('error');

        setTimeout(function(){
            multiplyBtn.classList.remove('error');
        }, 500);
    }
    
});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {
    if(checkScreen(screenValue.textContent)) {
        screenValue.textContent += ' / ';
    }
    else {
        divideBtn.classList.add('error');

        setTimeout(function(){
            divideBtn.classList.remove('error');
        }, 500);
    }
    
});

const clrBtn = document.querySelector('.clr');
clrBtn.addEventListener('click', () => {
    screenValue.textContent = '';
});

const eqlBtn = document.querySelector('.equal');
eqlBtn.addEventListener('click', () => {
    const equation = screenValue.textContent.split(' ');
    const result = operate(parseInt(equation[0]), equation[1], parseInt(equation[2]));
    screenValue.textContent = result;
});