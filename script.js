//your JS code here. If required.
const form = document.querySelector("form");
console.log(form);
//
form.addEventListener("submit" , onSubmit);
//
function onSubmit(event){
    console.log("submited");
    //prevets default behaviours
    event.preventDefault();
    // creating an object for storing values;
    let employee = {
        FirstName:form["First Name"].value,
        LastName:form["Last Name"].value,
        PhoneNumber:form["Phone Number]".value,
        EmailID:form["Email ID]".value


    }
    //I will store all the values into in a string

    let alertString ="";

    for(let prop in employee)
       {
        alertString=alertString+`${prop}:${employee[prop]}\n`;
       }
    
    
    //
    alert(alertString);


    
}