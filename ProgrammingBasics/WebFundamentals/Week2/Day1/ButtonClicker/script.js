function login(elem) {
    var inner = elem.innerText
    if (inner == "Login")
        elem.innerText = "Logout"
    else 
        elem.innerText = "Login"
    
}

function remove(elem) {
    elem.remove()
}

function like() {
    alert("Ninja was liked")
}