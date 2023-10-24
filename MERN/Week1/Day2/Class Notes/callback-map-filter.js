// functional programming

const myCoolCallback = () => {
    console.log("start")
}

setTimeout(myCoolCallback, 3000)

console.log("end")

const array1 = [1, 2, 4, 8]
let array2 = array1.map((x) => console.log(x))