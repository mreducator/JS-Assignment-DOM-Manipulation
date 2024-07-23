let toogleButton = document.getElementById("btn");
let tigerImage = document.getElementById("tiger-img");
let visible = false;

function toggleImage(){
    visible = !visible;
    console.log(visible)
    if(visible){
        tigerImage.style.visibility = "hidden";
        document.getElementById("text").innerText = "Your Image Is Hidden";
    }else{
        tigerImage.style.visibility = "visible"
        document.getElementById("text").innerText = "Your Image Is Visible";
    }
}
toogleButton.addEventListener('click',toggleImage);