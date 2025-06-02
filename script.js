const buttons = document.querySelectorAll(".rounded-button");
const display = document.getElementById("display");
const clear_button = document.getElementById("clear-button");
const equals_button = document.getElementById("equals-button");

//buttons.forEach(button => {
    //button.addEventListener('click', () => { 
        //console.log(button.textContent);
        //appendNumber(button.textContent);
    //});
//});

function addToDisplay(input){
    display.value += input;
}

function AC_clear() {
    display.value = '0';
}


clear_button.addEventListener('click', () => {
    AC_clear();
});

function appendNumber(input) {
    let currentValue = display.textContent;
    if (currentValue === '0') {
        display.textContent = input;
    } else {
        display.textContent += input;
    }
}


function calculate(){
    try{
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent = "Error";
    }
}