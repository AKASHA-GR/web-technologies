function formValidate() {
    let isValid = true;
    let name = document.registerform.namefield.value;
    let email = document.registerform.emailfield.value;
    let phone = document.registerform.phonefield.value;
    let password = document.registerform.passwordfield.value;
    let confirmPassword = document.registerform.confirmPasswordfield.value;

    if(name.length <= 4){
        alert("The name is too short.")
        isValid = false;
    }

    if(name.length >= 4){
        alert("The name is submitted.")
    }


    if(email.length <= 4){
        alert("The email is too short.")
        isValid = false;
    }

    if(phone.length <= 10){
        alert("The phone is too short.")
        isValid = false;
    }

    if(password.length <= 6){
        alert("The password is too short.")
        isValid = false;
    }

    if(password !== confirmPassword){
        alert("The passwords do not match.")
        isValid = false;
    }

    return isValid;
}