const grey = document.querySelectorAll(".grey");
const display = document.getElementById("display");
const clear_button = document.getElementById("clear-button");

grey.forEach(button => {
    button.addEventListener('click', () => { 
        console.log(button.textContent);
        appendNumber(button.textContent);
    });
});

function AC_clear() {
    display.textContent = '0';
}

clear_button.addEventListener('click', () => {
    AC_clear();
});

function appendNumber(p) {
    let currentValue = display.textContent;
    if (currentValue === '0') {
        display.textContent = p;
    } else {
        display.textContent += p;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a , b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
