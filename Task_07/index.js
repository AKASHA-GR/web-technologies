function formValidate() {
    let isValid = true;
    let name = document.registerform.name.value;
    let email = document.registerform.email.value;
    let phone = document.registerform.phone.value;

    if(name.length <= 4){
        alert("The name is too short.")
        isValid = false;
    }

    if(name.length >= 4){
        alert("The name is submitted.")
    }
    return isValid;


    if(email.length <= 4){
        alert("The email is too short.")
        isValid = false;
    }

    if(phone.length <= 10){
        alert("The phone is too short.")
        isValid = false;
    }

    return isValid;
}