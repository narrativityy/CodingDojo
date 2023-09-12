function edit(elem) {
    var name = document.querySelector(elem)
    name.innerText = "John Cena"
}

function remove(elem) {
    var user = document.querySelector(elem) 
    var connectionRequestNum = document.querySelector("#connection-requests-val")
    user.remove()
    connectionRequestNum.innerText = Number(connectionRequestNum.innerText) - 1
}

function accept(elem) {
    var user = document.querySelector(elem) 
    var connectionRequestNum = document.querySelector("#connection-requests-val")
    var connectionsNum = document.querySelector("#connections-val")
    user.remove()
    connectionRequestNum.innerText = Number(connectionRequestNum.innerText) - 1
    connectionsNum.innerText = Number(connectionsNum.innerText) + 1
}