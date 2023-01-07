var minusCoffee = document.getElementById('minus-coffee-button');
var plusCoffee = document.getElementById('coffee');
var minusMilk = document.getElementById('minus-milk-button');
var plusMilk = document.getElementById('plus-milk-button');
var minusPancakes = document.getElementById('minus-pancakes-button');
var plusPancakes = document.getElementById('plus-pancakes-button');
var minusBacon = document.getElementById('minus-bacon-button');
var plusBacon = document.getElementById('plus-bacon-button');
var checkoutButton = document.getElementById('checkout-button');

//plusCoffee button on click calls addCoffee
//addCoffee adds one instance of 'coffee' when + is clicked
//minusCoffee button on click calls subtractCoffee
//subtractCoffee removes once instance of coffee from localstorage
plusCoffee.addEventListener('click', addCoffee);
function addCoffee() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Coffee';
    var menuItem = {
        name: item
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}
minusCoffee.addEventListener('click', subtractCoffee);
function subtractCoffee() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'coffee');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

//show order on page with l
function updateOrderList() {
var orderList = document.querySelector('.orderList')
var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
let orderItems = '';
for (let orderItemName of customerOrder) {
    orderItems += '<li>' + orderItemName.name + '</li>';
}
console.log(orderItems)
orderList.innerHTML = orderItems;
}










