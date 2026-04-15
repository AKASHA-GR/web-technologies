function submitForm(){
    console.log("Form submitted");
    alert("Enter your name,email,phone number,address.");
    let name = document.getElementById("formGroupExampleInput").value;
    let email = document.getElementById("formGroupExampleInput2").value;
    let phone = document.getElementById("formGroupExampleInput3").value;
    let address = document.getElementById("formGroupExampleInput4").value;
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Address: " + address);

}