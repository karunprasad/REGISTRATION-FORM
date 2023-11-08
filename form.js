const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const pwd = document.getElementById("pwd");
const cpwd = document.getElementById("cpwd");
const sumbmitContainer = document.getElementById("resultRegister");
const result = document.getElementById("result");
let message=""

function submit() {
    if (sumbmitContainer.style.display === "none" || sumbmitContainer.style.display === "") {
        sumbmitContainer.style.display = "block"; // Show
    }
    else {
        sumbmitContainer.style.display = "none"; // Hide
    }

    console.log(fname)
    if (fname.value == "" || lname.value == "" || email.value == "" || pwd.value == "") {
        result.innerHTML = "All the fields are Empty.. "     
    }
    else if (fname.value == "") {
        result.innerHTML = "Please Enter First Name"
    }
    else if (lname.value == "") {
        result.innerHTML = "Please Enter Last Name"
    }
    else if (email.value == "") {
        result.innerHTML = "Please Email Id"
    }
    else if (pwd.value == "") {
        result.innerHTML = "Please Enter Password"
    }
    else if (cpwd.value == "") {
        result.innerHTML = "Please Confirm Password"
    }
    
    else if (pwd.value.length < 5) {
        result.innerHTML = "Password has  less len  ..<"   
    }
    else if (pwd.value !== cpwd.value) {
        result.innerHTML = "Password Don't match ..<"

    }
    else{
        result.style.color="green"
        result.innerHTML="Congrats Your account Created Successfully...>"
    }
}
function toggleShowpwd() {
    if (pwd.type == "password") {
        pwd.type = "text";
        cpwd.type = "text";
    }
    else {
        pwd.type = "password";
        cpwd.type = "password";
    }
}
function closeSucess() {
    if (sumbmitContainer.style.display === "none" || sumbmitContainer.style.display === "") {
        sumbmitContainer.style.display = "block"; // Show the cart
    }
    else {
        sumbmitContainer.style.display = "none"; // Hide the cart
    }
}