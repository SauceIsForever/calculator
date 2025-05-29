const grey = document.querySelectorAll(".grey");
const number = document.getElementById("number");

grey.forEach(button => {
    button.addEventListener('click', () => { 
    console.log(button.textContent);

    number.textContent = (button.textContent);

    });
});

