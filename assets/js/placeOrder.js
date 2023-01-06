const placeOrder = document.getElementById('placeOrder');

//When checkout button is clicked, client sends localstorage to server
placeOrder.addEventListener('click', test)
function test() {
const orderFromLocal = JSON.parse(localStorage.getItem('customerOrder'));
const url = '/menu'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(orderFromLocal)
    })
console.log(orderFromLocal)
};
