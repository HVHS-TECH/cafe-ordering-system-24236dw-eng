const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {

    OUTPUT.innerHTML = "";

    let name = document.getElementById("nameField").value;
    let order = document.getElementById("orderField").value;
    let money = Number(document.getElementById("moneyField").value);
    let quantity = Number(document.getElementById("quantityField").value);

    let price = 0;

    if (order == "Adidas") {
        price = 190;
    }
    else if (order == "Nike") {
        price = 200;
    }
    else if (order == "Mitre") {
        price = 160;
    }
    else if (order == "Puma") {
        price = 180;
    }
    else if (order == "New Balance") {
        price = 150;
    }
    else if (order == "Select") {
        price = 170;
    }
    else {
        OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
        OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
        OUTPUT.innerHTML += "<p>Sorry, we don't sell that ball.</p>";
        return;
    }

    OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
    OUTPUT.innerHTML += "<p>You ordered a " + order + " ball.</p>";
    OUTPUT.innerHTML += "<p>Quantity: " + quantity + "</p>";

    let total = price * quantity;

    OUTPUT.innerHTML += "<p>Total price: $" + total + "</p>";

    if (money >= total) {
        let change = money - total;
        OUTPUT.innerHTML += "<p>You have enough money.</p>";
        OUTPUT.innerHTML += "<p>Your change is $" + change + "</p>";
    }
    else {
        let need = total - money;
        OUTPUT.innerHTML += "<p>You do not have enough money.</p>";
        OUTPUT.innerHTML += "<p>You need $" + need + " more.</p>";
    }
}