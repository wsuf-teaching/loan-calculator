const calculate = document.querySelector("#calculate-loan");
const reset = document.querySelector("#reset-loan");
const copyButtons = document.querySelectorAll(".copy-button");



calculate.addEventListener("click", function() {

    const amountElement = document.getElementById("amount");
    console.log(amountElement);
    const amount = document.getElementById("amount").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    
    if (
        amount === "" || amount <= 0 || isNaN(amount) ||
        rate === "" || rate <= 0 || isNaN(rate)
    ) {
        alert('Enter correct values');
        return;
    }

    const months = years * 12;
    const totalAmountDue = amount * (1 + (rate/100) * years);
    const monthlyAmountDue = totalAmountDue/months;
    const totalInterest = totalAmountDue - amount;

    document.querySelector("#monthly-payment").value = monthlyAmountDue.toFixed(2);
    document.querySelector("#total-payment").value = totalAmountDue.toFixed(2);
    document.querySelector("#total-interest").value = totalInterest.toFixed(2);


});


reset.addEventListener("click",function(){
    // document.getElementById("amount").value = "";
    // document.getElementById("rate").value = "";
    // document.getElementById("years").value = "";
    // document.querySelector("#monthly-payment").value = "";
    // document.querySelector("#total-payment").value =  "";
    // document.querySelector("#total-interest").value = "";

    const inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.value = "";
    });
    // for(let i=0;i<inputs.length;i++){
    //     inputs[i].value = "";
    // }
});

copyButtons.forEach(copyButton => {

    copyButton.addEventListener("click",function() {
        const input = copyButton.parentElement.querySelector("input").value;

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



