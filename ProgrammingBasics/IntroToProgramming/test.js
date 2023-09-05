var arr = []
for (var i = 1; i <= 100; i++) {
    arr.push(i)
}
var string
for (var i = 0; i < arr.length; i++) {
    string = ""
    if (arr[i] % 3 === 0) {
        string += "fizz"
    }
    if (arr[i] % 5 === 0) {
        string += "buzz"
    }
    else if (string == ""){
        string += arr[i]
    }
    console.log(string)
}