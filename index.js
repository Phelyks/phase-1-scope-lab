var customerName = "bob";  //bob
const leastCustomer = "ray";  //ray

function upperCaseCustomerName(){
    window.customerName = customerName.toUpperCase()
    return window.customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer(){
    leastCustomer = 'Luther'
    return leastCustomer
}