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
        FirstName:form.FirstName.value,
        LastName:form.LastName.value,
        PhoneNumber:form.PhoneNumber.value,
        EmailID:form.EmailID.value


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