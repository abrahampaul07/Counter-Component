let plusBtn = document.querySelector('.plus-btn');
let minusBtn = document.querySelector('.munis-btn');
let resetBtn = document.querySelector('.reset-btn');
let btnContainer = document.querySelector('.btn-container');
let counter = document.querySelector('h2');
let input = document.querySelector('input');

let count = 0;

let incDecBy = 1;

input.addEventListener('change', function(e) {
    console.log(e.target.value);  //it is of string type
    if(Number(e.target.value)<=0) {
        alert("Enter a postive number");
        return;
    }
    incDecBy = Number(e.target.value);
})

btnContainer.addEventListener('click', function(e) {
    // console.log(e);
    if (e.target.classList.contains('plus-btn')) {
        // console.log('plus');
        count+=incDecBy;
    }
    else if (e.target.classList.contains('minus-btn')) {
        // console.log('minus');
        if (count == 0 || count-incDecBy<0) {
            return;
        }
        count-=incDecBy;
    }
    else if (e.target.classList.contains('reset-btn')) {
        // console.log('reset');
        count = 0;
    }
    counter.innerText = count;
})