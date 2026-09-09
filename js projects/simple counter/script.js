const countDisplay = document.querySelector("#count");
const incrementBtn = document.querySelector(".btn-increment");
const decrementBtn = document.querySelector(".btn-decrement");


let count=0;

function updateCountDisplay(){
    countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", ()=>{
    count++;
    updateCountDisplay();
});

decrementBtn.addEventListener("click", ()=>{
    if(count==0){
        
    }
    count--;
    updateCountDisplay();
});