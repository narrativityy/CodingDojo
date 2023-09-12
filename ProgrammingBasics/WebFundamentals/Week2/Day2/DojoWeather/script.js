function cityAlert() {
    alert("Loading weather report...")
}

function remove(elem) {
    var div = document.querySelector(elem)
    div.remove()
}

function convert(temps, elem) {
    var tempVals = document.querySelectorAll(temps)
    if (elem == "fahrenheit") {
        for (var i = 0; i < tempVals.length; i++) {
            tempVals[i].innerText = Math.round(Number(tempVals[i].innerText) * (9/5) + 32)
        }
    }
    else {
        for (var i = 0; i < tempVals.length; i++) {
            tempVals[i].innerText = Math.round((Number(tempVals[i].innerText) - 32) * (5/9))
        }
    }
}