let loggInButton = document.getElementById('loggedIn');
let loggOutButton = document.getElementById('loggedOut');
console.log(loggInButton,loggOutButton)

loggInButton.addEventListener('click',()=>{
    localStorage.setItem('userLoggedIn','true');
    let getValue = localStorage.getItem('userLoggedIn');
    if(getValue){
        document.getElementById('status').innerText = 'User is Logged In'
    }else{
        document.getElementById('status').innerText = '';
    }
})
loggOutButton.addEventListener('click',()=>{
    localStorage.removeItem('userLoggedIn');
    document.getElementById('status').innerText = 'User Logged out successfully';
})
