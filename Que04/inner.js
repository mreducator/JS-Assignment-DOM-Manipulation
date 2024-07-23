let submitButton = document.getElementById("submit-button");
let userName= document.getElementById("username");
let userPassword = document.getElementById("userpassword");
let showAlert = document.getElementById("user-alert");
let showPassword = document.getElementById("password-alert")
console.log(submitButton,userName,userPassword,showAlert);

function formValidation(e){
    if(userName.value == ""){
        showAlert.innerHTML = "user name empty";
        e.preventDefault();
    }else if(userName.value.length < 3){
            showAlert.innerHTML = "user name required min 3 chr."
            e.preventDefault();
    }else{
        showAlert.innerHTML = "";
    }
   
    if(userPassword.value == ""){
        showPassword.innerHTML = "password empty";
        e.preventDefault();
    }else if(userPassword.value.length < 3){
        showPassword.innerHTML = "password required 3 chr";
        e.preventDefault();
    }else{
        showPassword.innerHTML = "";
        alert('form submit successful')
    }
     /*if(userName.value == userName.value){
        showAlert.innerHTML = "";
    }*/
   
   

}
submitButton.addEventListener('click',formValidation);