console.log("Hello world");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<h2></h2>";

//variables

/****************************
main code

****************************/
const MONEY_FIELD = document.getElementById("moneyField");
let UserpocketMoney = Number(MONEY_FIELD.value);

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
function calculateChange(_money, _price){
let change = _money - _price
return change;
}
    if (money >= 4){
        OUTPUT.innerHTML += "<p>you have enough to buy a chocolate bar";
        OUTPUT.innerHTML += "<p>you will get $"+calculateChange(money, chocolatePrice)+" change";
    }
    else{
        OUTPUT.innerHTML += "<p>you do not have enough to buy a chocolate bar"
    }
}