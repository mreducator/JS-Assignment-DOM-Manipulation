let hr = document.getElementById("hrs");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let arr = ["a","b","c","d","e","f",1,2,3,4,5,6,7,8,9,0]

function backgroundTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(seconds < 10){
        sec.innerHTML = "0" + seconds;
    }else{
        sec.innerHTML = seconds;
    }
    if(minutes < 10){
        min.innerHTML = "0" + minutes;
     }else{
        min.innerHTML = minutes;
     }
    if(hours < 10){
     hr.innerHTML = "0" + hours;
    }else{
        hr.innerHTML = hours;
    }
}

setInterval(backgroundTime,1000)
function randomColor(){
  let hex = "#";
  for(let increment = 0; increment < 6; increment++ ){
    let x = Math.floor(Math.random() * arr.length);
    hex += arr[x];
  }
  document.body.style.backgroundColor = hex;
}
setInterval(randomColor,1000);


//btnClick.addEventListener('click',randomColor);