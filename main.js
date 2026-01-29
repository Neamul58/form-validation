const submitBtn = document.getElementById('submit-Btn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById("passError");

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    
    if(validateName() && validateEmail() && validatePass()) {
        alert("Form Submitted Successfully");
    }
});

function validateName() {
    let name = document.getElementById('name').value;
    
    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Your FullName";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML = "";   
    nameError.previousElementSibling.classList.add('fa-check', 'check-color');
    return true;
}


function validateEmail() {
    let email = document.getElementById('email').value;
    
    if(email.length == 0) {
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = "Enter valid email";
        emailError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add("fa-check", "check-color");
    return true;
}


function validatePass() {
    let pass = document.getElementById("pass").value;
    
    if(pass.length == 0) {
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    
    if(!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passError.innerHTML = "Password should be 8+ characters, Upper, Lower, Number, Special";
        passError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add("fa-check", 'check-color');
    return true;
}

