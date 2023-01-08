// Drink Variables
var minusCoffee = document.getElementById('minus-coffee-button');
var plusCoffee = document.getElementById('plus-coffee-button');

var minusMilk = document.getElementById('minus-milk-button');
var plusMilk = document.getElementById('plus-milk-button');

var plusOj = document.getElementById('plus-Oj-button');
var minusOj = document.getElementById('minus-Oj-button');


// Menu Variables
var plusEggs = document.getElementById('plus-eggs-button');
var minusEggs = document.getElementById('minus-eggs-button');

var plusGravy = document.getElementById('plus-gravy-button');
var minusGravy = document.getElementById('minus-gravy-button');

var plusAvaToast = document.getElementById('plus-AvaToast-button');
var minusAvaToast = document.getElementById('minus-AvaToast-button');

var plusFrenchToast = document.getElementById('plus-FrenchToast-button');
var minusFrenchToast = document.getElementById('minus-FrenchToast-button');

var minusPancakes = document.getElementById('minus-pancakes-button');
var plusPancakes = document.getElementById('plus-pancakes-button');

var plusOmelette = document.getElementById('plus-Omelette-button');
var minusOmelette = document.getElementById('minus-Omelette-button');

// Side Variables
var minusBacon = document.getElementById('minus-bacon-button');
var plusBacon = document.getElementById('plus-bacon-button');

var plusHash = document.getElementById('plus-Hash-button');
var minusHash = document.getElementById('minus-Hash-button');

var plusToast = document.getElementById('plus-Toast-button');
var minusToast = document.getElementById('minus-Toast-button');

var checkOut = document.getElementById('checkOut');

//plusCoffee button on click calls addCoffee
//addCoffee adds one instance of 'coffee' when + is clicked
//minusCoffee button on click calls subtractCoffee
//subtractCoffee removes once instance of coffee from localstorage
plusCoffee.addEventListener('click', addCoffee);
function addCoffee() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Coffee';
    var price = 2.39
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusCoffee.addEventListener('click', subtractCoffee);
function subtractCoffee() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Coffee');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusOj.addEventListener('click', addOj);
function addOj() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Orange Juice';
    var price = 1.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusOj.addEventListener('click', subtractOj);
function subtractOj() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Orange Juice');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusMilk.addEventListener('click', addMilk);
function addMilk() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Milk';
    var price = 1.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusMilk.addEventListener('click', subtractMilk);
function subtractMilk() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Milk');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusGravy.addEventListener('click', addGravy);
function addGravy() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Gravy and Biscuits';
    var price = 5.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusGravy.addEventListener('click', subtractGravy);
function subtractGravy() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Gravy and Biscuits');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusEggs.addEventListener('click', addEggs);
function addEggs() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Scrambled Eggs';
    var price = 6.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusEggs.addEventListener('click', subtractEggs);
function subtractEggs() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Scrambled Eggs');

    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusAvaToast.addEventListener('click', addAvaToast);
function addAvaToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Avacado Toast';
    var price = 11.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusAvaToast.addEventListener('click', subtractAvaToast);
function subtractAvaToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Avacado Toast');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusPancakes.addEventListener('click', addPancakes);
function addPancakes() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Pancakes';
    var price = 9.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusPancakes.addEventListener('click', subtractPancakes);
function subtractPancakes() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Pancakes');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusFrenchToast.addEventListener('click', addFrenchToast);
function addFrenchToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'French Toast';
    var price = 8.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusFrenchToast.addEventListener('click', subtractFrenchToast);
function subtractFrenchToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'French Toast');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusOmelette.addEventListener('click', addOmelette);
function addOmelette() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Omelette';
    var price = 14.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusOmelette.addEventListener('click', subtractOmelette);
function subtractOmelette() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Omelette');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusAvaToast.addEventListener('click', addAvaToast);
function addAvaToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Avacado Toast';
    var price = 11.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusAvaToast.addEventListener('click', subtractAvaToast);
function subtractAvaToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Avacado Toast');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusFrenchToast.addEventListener('click', addFrenchToast);
function addFrenchToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'French Toast';
    var price = 8.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusFrenchToast.addEventListener('click', subtractFrenchToast);
function subtractFrenchToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'French Toast');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusOmelette.addEventListener('click', addOmelette);
function addOmelette() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Omelette';
    var price = 14.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusOmelette.addEventListener('click', subtractOmelette);
function subtractOmelette() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Omelette');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusHash.addEventListener('click', addHash);
function addHash() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Hashbrowns';
    var price = 2.39;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusHash.addEventListener('click', subtractHash);
function subtractHash() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Hashbrowns');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusBacon.addEventListener('click', addBacon);
function addBacon() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Bacon';
    var price = 2.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusBacon.addEventListener('click', subtractBacon);
function subtractBacon() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Bacon');
    var removed = index !== -1 && customerOrder.splice(index, 1);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

plusToast.addEventListener('click', addToast);
function addToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder")) || [];
    var item = 'Toast';
    var price = 1.99;
    var menuItem = {
        name: item,
        cost: price
    }
    customerOrder.push(menuItem);
    localStorage.setItem('customerOrder', JSON.stringify(customerOrder));
    updateOrderList();
}

minusToast.addEventListener('click', subtractToast);
function subtractToast() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    var index = customerOrder.findIndex(o => o.name === 'Toast');
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

window.onload = updateOrderList();
