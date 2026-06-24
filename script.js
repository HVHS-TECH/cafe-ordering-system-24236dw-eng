console.log("Hello world");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<h2></h2>";

//variables

/****************************
main code

****************************/
function getFormInput(){
const NAME_FIELD = document.getElementById("nameField");
let Username = NAME_FIELD.value;
OUTPUT.innerHTML += "<p> Hi " + Username + "</p>";

const ORDER_FIELD = document.getElementById("orderField");
let Order = ORDER_FIELD.value;
OUTPUT.innerHTML += "<p> Your order is " + Order + "</p>";

const MONEY_FIELD = document.getElementById("moneyField");
let Money = MONEY_FIELD.value;
OUTPUT.innerHTML += "<p> You have " + Money + "</p>";
}
