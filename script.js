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
        "First Name":form["First Name"].value,
        "Last Name":form["Last Name"].value,
        "Phone Number":form["Phone Number"].value,
        "Email ID":form["Email ID"].value


    }
    //I will store all the values into in a string

    let alertString ="";

    for(let prop in employee)
       {
        alertString=alertString+`${prop}: ${employee[prop]}\n`;
       }
    
    
    //
    alert(alertString);


    
}