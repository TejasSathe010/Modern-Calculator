let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');
let countDisplay = document.querySelector('#count');

let countVar = 0;


increment.addEventListener("click", function() {
    console.log('Increment');
    countDisplay.textContent = `Count: ${++countVar}`;
    countDisplay.style.color = 'green';
    decrement.disabled = false;
});

decrement.addEventListener("click", function() {
    console.log('Increment');
    if(countVar > 0) {
        countDisplay.textContent = `Count: ${--countVar}`;
    } else {
        decrement.disabled = true;
        countDisplay.style.color = 'red';
        countDisplay.textContent = `Count: ${0}`;
    }
});