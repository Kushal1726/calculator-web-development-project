const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}

function calculate(operator){
    var currentvalue =parseFloat(display.value);
    if(operator=='%')
    {
        display.value=currentvalue/100;
    }
}