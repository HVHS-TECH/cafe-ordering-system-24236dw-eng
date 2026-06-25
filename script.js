console.log("Hello world");
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

const prices = {
  adidas: 190,
  nike: 200,
  mitre: 160,
  puma: 180,
  "new balance": 150,
  select: 170
};

function calculateChange(_money, _price) {
  return _money - _price;
}

function getFormInput() {
  OUTPUT.innerHTML = "";

  const name = document.getElementById("nameField").value;
  const orderInput = document.getElementById("orderField").value;
  const order = orderInput.toLowerCase();
  const money = Number(document.getElementById("moneyField").value);

  OUTPUT.innerHTML += "<p>Hi " + (name || "Customer") + "</p>";
  OUTPUT.innerHTML += "<p>Your order is " + (orderInput || "none") + "</p>";

  if (!orderInput) {
    OUTPUT.innerHTML += "<p>Please enter an item name from the list.</p>";
    return;
  }

  if (isNaN(money)) {
    OUTPUT.innerHTML += "<p>Please enter a valid money amount.</p>";
    return;
  }

  const price = prices[order];
  if (price === undefined) {
    OUTPUT.innerHTML += "<p>We don't have that item. Choose Adidas, Nike, Mitre, Puma, New Balance, or Select.</p>";
    return;
  }

  OUTPUT.innerHTML += "<p>You have $" + money + "</p>";

  if (money < price) {
    OUTPUT.innerHTML += "<p>You do not have enough money to buy the " +(order) + " ball.</p>";
    OUTPUT.innerHTML += "<p>You need $" + (price - money) + " more.</p>";
    return;
  }

  OUTPUT.innerHTML += "<p>You have enough to buy the " + (order) + " ball.</p>";
  OUTPUT.innerHTML += "<p>Your change will be $" + calculateChange(money, price) + "</p>";
}
