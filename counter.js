const counterE1 = document.querySelector('[data-find="counterValue"');
const addPoolButton = document.getElementById("addPoolButton");
const resetButton = document.getElementById("resetButton");

console.log(addPoolButton.dataset);

const COUNTER_INITIAL_VALUE = 0;
 
let counter = COUNTER_INITIAL_VALUE;

addPoolButton.addEventListener("click",function() {
    counter = counter + parseInt(addPoolButton.dataset.pool);
    console.log(counter,addPoolButton.dataset.pool);
    counterE1.innerText = counter;
});

resetButton.addEventListener("click",function() {
    counter = 0;
    counterE1.innerText = counter;
});
