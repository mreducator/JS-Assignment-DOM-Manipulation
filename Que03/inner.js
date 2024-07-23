let incrementButton = document.getElementById("increment-btn");
let decrementButton = document.getElementById("decrement-btn");
 let counter = 0;

 function increment(){
    counter++;
    document.getElementById("digit").innerHTML = counter;
 }
 function decrement(){
    counter--;
    document.getElementById("digit").innerHTML = counter;
    if(counter == 0){
        alert("Counter is going behind zero");
    }
 }
incrementButton.addEventListener('click',increment);
decrementButton.addEventListener('click',decrement);