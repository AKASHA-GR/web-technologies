function ClickMeFunction() {
    const c= 22.5;
    console.log("Const:",c);
    let a = true;
    console.log("Boolean: ",a);
    var b=20    
    console.log("Integer value: ",b);
    b="Arun"
    console.log("String value: ",b);     
    
    
    let heading = document.getElementById("heading");
    heading.innerText = "Heading Changed using Id - i am learning JavaScript";

    let classPara= document.getElementsByClassName("p1");
    classPara[0].innerText = "Changed using class - i am learning variable";
    classPara[1].innerText = "Changed using class - i am learning data types";

    let classPara2 = document.getElementsByClassName("p1");
    classPara2[0].style.color = "rgb(255, 0, 0)";
    classPara2[1].style.color = "rgb(255, 0, 0)";   

    let classpara3 = document.getElementsByClassName("p2");
    classpara3[0].innerText = "Changed using class - i am learning operators";
    

    let classpara = document.querySelector(".p3");
    classpara.innerText = "Changed using query selector - i am learning functions";

    let bodyTag = document.getElementsByTagName("body");
    bodyTag[0].style.backgroundColor = "rgb(121, 213, 236)";

    let name= document.getElementsByName("myName");
    name[0].value="Updated Name - Akasha";
}   