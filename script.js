const grey = document.querySelectorAll(".grey");

grey.forEach(button => {
    button.addEventListener('click', () => { 
    console.log(button.textContent);
    });
});

