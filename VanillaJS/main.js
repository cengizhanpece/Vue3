const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const countHeader = document.getElementById("count");
let count = 0;
increment.addEventListener("click", e => {
    count++;
    countHeader.innerText = count;
})

decrement.addEventListener("click", e => {
    count--;
    countHeader.innerText = count;
})