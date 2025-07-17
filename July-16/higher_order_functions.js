//what is a higher-order-function ? HOF
//HOF is a function which takes one or more functions as an arguments or returns a function

//example - 1 // function passed as an argument
// function printName(name, func) {
//     console.log(name)
//     console.log(func)
// }

// const print = function(name) {
//     console.log(name)
// }

// printName('Mike', print)

//example - 2 // returns a function 

function addNum(num1, num2) {
    return function sumNumbers() {
        console.log('Added')
    }

}

var result = addNum(3,4)

//console.log(result())

//example - 3

//map, filter

const arr = [1,2,3]

const res =  arr.map(num => num *2)

console.log('res', res)