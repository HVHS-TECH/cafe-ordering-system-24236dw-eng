/****************************
Conditionals
****************************/

console.log("Running t12_conditionals.js")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<h2>added by javascrript</h2>";

//variables

/****************************
main code

****************************/
function start(){
const NAME_FIELD = document.getElementById("nameField");
let Username = NAME_FIELD.value;
const AGE_FIELD = document.getElementById("ageField");
let Userage = Number(AGE_FIELD.value);
const MONEY_FIELD = document.getElementById("moneyField");
let UserpocketMoney = Number(MONEY_FIELD.value);
let name = "diwakar";
let pocketMoney = 2;
let age = 16;
let year = 2026;
var yearBorn = year-Userage;
var tenYears = Userage+10;
var halfMoney = UserpocketMoney/2;
var pocketMoney2 = UserpocketMoney/2+3;
OUTPUT.innerHTML += "<p>Hi "+ Username;
OUTPUT.innerHTML += "<p>as of " + year + " you are " + Userage + " years old";
OUTPUT.innerHTML += "<p>you were born in " + yearBorn;
OUTPUT.innerHTML += "<p>In 10 years, you will be " + tenYears;
OUTPUT.innerHTML += "<p>you have " + UserpocketMoney + " dollars.";
OUTPUT.innerHTML += "<p>you spend half of your money, now you have " + halfMoney + " dollars";
OUTPUT.innerHTML += "<p>then you get $3, you now have " + pocketMoney2 + " dollars" ;

welcome()
displayProduct("<p>chocolate: ", "$4.00");
displayProduct("<p>chips: ", "$3.00");
displayProduct("<p>drink: ", "$2.50");
    if (pocketMoney2 >= 4){
        OUTPUT.innerHTML += "<p>you have enough to buy a chocolate bar";
    }
    else{
        OUTPUT.innerHTML += "<p>you do not have enough to buy a chocolate bar"
    }

}

/****************************
functions
****************************/
function welcome(){
    OUTPUT.innerHTML += "<p>welcome to the shop:";
}

function displayProduct(_name, _price){
    OUTPUT.innerHTML += _name + _price
}