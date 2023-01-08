var minusCoffee = document.getElementById('minus-coffee-button');
var plusCoffee = document.getElementById('plus-coffee-button');
var minusMilk = document.getElementById('minus-milk-button');
var plusMilk = document.getElementById('plus-milk-button');
var minusPancakes = document.getElementById('minus-pancakes-button');
var plusPancakes = document.getElementById('plus-pancakes-button');
var minusBacon = document.getElementById('minus-bacon-button');
var plusBacon = document.getElementById('plus-bacon-button');
var checkoutButton = document.getElementById('checkout-button');
var goToCheckoutButton = document.getElementById('goToCheckout');

//plusCoffee button on click calls addCoffee
//addCoffee adds one instance of 'coffee' when + is clicked
//minusCoffee button on click calls subtractCoffee
//subtractCoffee removes once instance of coffee from localstorage
plusCoffee.addEventListener('click', addCoffee);
function addCoffee() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Coffee';
    var cost = 1.99;
    var menuItem = {
        name: item,
        price: cost
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}
minusCoffee.addEventListener('click', subtractCoffee);
function subtractCoffee() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name == 'Coffee');
    var removed = index ==! -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

//show order on page with list
function updateOrderList() {
var orderList = document.querySelector('.orderList')
var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
let orderItems = '';
for (let orderItemName of customerOrder) {
    orderItems += '<li>' + orderItemName.name + orderItemName.price + '</li>';
}
console.log(orderItems)
orderList.innerHTML = orderItems;
}

window.onload = updateOrderList();











