let email=document.getElementById("email");
let password=document.getElementById("password");
let admNumber=document.getElementById("admission-number");
let submit=document.getElementById("submit");


function nextPage(){
    if(email.value=="kamaumkay@gmail.com" && password.value=="Michaelkamau162004"){
        window.location.assign("main.html");
    }
    }
    
   
submit.addEventListener("click", nextPage);