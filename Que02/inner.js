let toogleButton = document.getElementById("toogle-button");
 function changeTheme(){
    if(document.body.style.backgroundColor == ""){
        document.getElementById("heading").style.color = "white";
        document.body.style.backgroundColor = "black";
        document.getElementById("content-text").innerText = "This is a Dark Mode"
        document.getElementById("content-text").style.color = "white";
    }else if(document.body.style.backgroundColor == "black"){
        document.getElementById("heading").style.color = "black";
        document.body.style.backgroundColor = "";
        document.getElementById("content-text").innerText = "This is a Light Mode";
        document.getElementById("content-text").style.color = "black";
    }
 }
 toogleButton.addEventListener('click',changeTheme); 