var user = {
    name: "Yaruto",
    email: "1111@gmail.com"
}

var user2 = {
    name: "Mishnok",
    email: "2222@gmail.com"
}

var user3 = {
    name: "Ihoryamba",
    email: "3333@gmail.com"
}

var user4 = {
    name: "Den",
    email: "4444@gmail.com"
}

var user5 = {
    name: "Pasheralt",
    email: "5555@gmail.com"
}

var userArr = [user, user2, user3, user4, user5];
var orderNumber = prompt("Enter the order number:");

if (orderNumber <= 0 || orderNumber > userArr.length) {
    alert("There is no user with such an order number.");
} else {
    alert("Name: " + userArr[orderNumber - 1].name + "\nEmail: " + userArr[orderNumber - 1].email);
}