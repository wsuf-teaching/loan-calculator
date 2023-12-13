// grab the elements from the DOM
// another option would be to use the document.getElementById syntax
const calculate = document.querySelector("#calculate-loan");
const reset = document.querySelector("#reset-loan");
// const calculate = document.getElementById("calculate-loan");
// const reset = document.getElementById("reset-loan");

// here we use the querySelector[ALL] function as we want to retrieve multiple elements at the same time
const copyButtons = document.querySelectorAll(".copy-button");


// click event listener for the calculate button with an inlined function
// we are free to declare the function beforehand and just refer to its name here
// calculate.addEventListener("click",calculateStuff);
calculate.addEventListener("click", function() {

    // getting the value property of the input elements
    const amount = document.getElementById("amount").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    
    // doing some validation on the data and exiting the function of they fail
    if (
        amount === "" || amount <= 0 || isNaN(amount) ||
        rate === "" || rate <= 0 || isNaN(rate)
    ) {
        alert('Enter correct values');
        return;
    }

    // doing the actual calculations
    const months = years * 12;
    const totalAmountDue = amount * (1 + (rate/100) * years);
    const monthlyAmountDue = totalAmountDue/months;
    const totalInterest = totalAmountDue - amount;

    // writing the results back to the DOM with two decimals precision
    document.querySelector("#monthly-payment").value = monthlyAmountDue.toFixed(2);
    document.querySelector("#total-payment").value = totalAmountDue.toFixed(2);
    document.querySelector("#total-interest").value = totalInterest.toFixed(2);


});

// reset button event listener clearing all the input fields
reset.addEventListener("click",function(){
    // either we manually get ahold of each element and null them out
    // document.getElementById("amount").value = "";
    // document.getElementById("rate").value = "";
    // document.getElementById("years").value = "";
    // document.querySelector("#monthly-payment").value = "";
    // document.querySelector("#total-payment").value =  "";
    // document.querySelector("#total-interest").value = "";

    // or grab them with a single query and iterate through them some way
    const inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.value = "";
    });
    // for(let i=0;i<inputs.length;i++){
    //     inputs[i].value = "";
    // }
});

// we add the same event listener to all three of the copy buttons
copyButtons.forEach(copyButton => {

    copyButton.addEventListener("click",function() {
        // getting the parent of the button and searching for an input element there
        const input = copyButton.parentElement.querySelector("input").value;

        // try to copy the value
        // if the Promise (more about that in a later class) 
        // finishes successfully, the then() block will be executed
        // if it fails, the catch() block will
        // the finally() executes both cases
        navigator.clipboard.writeText(input)
        .then(()=>{
            console.log("success");
        }).catch((error)=>{
            console.log("failure" + error);
        }).finally(()=>{
            console.log("finally");
        });
    });

});



