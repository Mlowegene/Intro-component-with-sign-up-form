const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let firstName = fname.value.trim();
    let lastName = lname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (firstName === "") {
        errorFunction(fname, 'First Name cannot be empty');
    }else {
        successFunction(fname);
    }

    if (lastName === "") {
        errorFunction(lname, 'Last Name cannot be empty');
    }else {
        successFunction(lname);
    }

    if (emailValue === "") {
        errorFunction(email, 'Email cannot be empty');
    }else if(!emailValue.match(pattern)){
        errorFunction(email, 'Looks like not an email');
    }else {
        successFunction(email);
    }

    if (passwordValue === "") {
        errorFunction(password, 'Password cannot be empty');
    }else {
        successFunction(password);
    }
})


function errorFunction(req, message) {

    const formControl = req.parentElement;
    formControl.classList.add('error');
    
    const span = formControl.querySelector('.span');
    span.innerText = message;
    console.log("nimefika apa");
}

function successFunction(req) {
    console.log("imefanikiwa");
    const formControl = req.parentElement;
    formControl.classList.remove('error');

    const span = formControl.querySelector('.span');
    span.innerText = "";
    formControl.classList.add('success');
}
