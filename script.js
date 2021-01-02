
document.getElementById("submitButton").addEventListener("click", function () {

    /* Text Inputs */
    let nameVariable = document.getElementById("myName").value;
    let passwordVariable = document.getElementById("myPassword").value;
    let textareaVariable = document.getElementById("myDescription").value;
    let numberVariable = document.getElementById("myAge").value;

    console.log("nameVariable", nameVariable);
    console.log("passwordVariable", passwordVariable);
    console.log("textareaVariable", textareaVariable);
    console.log("numberVariable", numberVariable);

    /* Date/Time Inputs */
    let dateVariable = document.getElementById("birthdate").value;
    let timeVariable = document.getElementById("meetingTime").value;

    console.log("dateVariable", dateVariable);
    console.log("timeVariable", timeVariable);

    /* Select Input */
    let myCar = document.getElementById("car").value;

    console.log("myCar", myCar);

    /* Checkbox/Radio Inputs */

    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;

    let red = document.getElementById("red").checked;
    let blue = document.getElementById("blue").checked;
    let green = document.getElementById("green").checked;

    console.log("male", male);
    console.log("female", female);
    console.log("red", red);
    console.log("blue", blue);
    console.log("green", green);

    /* DOM Javascript to change innerHTML */

    let sentence = "My First name is " + nameVariable + ". My password is " + passwordVariable + ". My description is " + textareaVariable;

    document.getElementById("result").innerHTML = sentence;
});