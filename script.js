let formButton = document.getElementById("button");

formButton.onclick = function() {
    let user = {name: "", email: "", age: 0, comment: "", country:""};
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = document.getElementById("age").value;
    user.comment = document.getElementById("text_area").value;
    user.country = document.getElementById("country").value;
    console.log(user);
    return false;
}