//show order on page with l
function updateOrderList() {
    var orderList = document.querySelector('.orderList')
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    let orderItems = '';
    for (let orderItemName of customerOrder) {
        orderItems += '<li>' + orderItemName.name + " " + orderItemName.cost + '</li>' + orderItems;
    }
    console.log(orderItems)
    orderList.innerHTML = orderItems;
    }
    
    window.onload = updateOrderList();
    