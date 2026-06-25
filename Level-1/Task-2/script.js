// Greeting

let hour = new Date().getHours();

let greeting = "";

if(hour < 12){

    greeting = "☀️ Good Morning";

}
else if(hour < 18){

    greeting = "🌤️ Good Afternoon";

}
else{

    greeting = "🌙 Good Evening";

}

document.getElementById("greeting").innerHTML = greeting;


// Color Button

const button = document.getElementById("colorBtn");

const colors = [

"#0d6efd",
"#198754",
"#dc3545",
"#6f42c1",
"#fd7e14",
"#20c997"

];

let index = 0;

button.addEventListener("click",function(){

    index++;

    if(index >= colors.length){

        index = 0;

    }

    button.style.background = colors[index];

});


// Calculator

function calculate(){

    let num1 = parseFloat(document.getElementById("num1").value);

    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){

        document.getElementById("result").innerHTML =
        "Please enter both numbers.";

        return;

    }

    let sum = num1 + num2;

    document.getElementById("result").innerHTML =
    "Result = " + sum;

}