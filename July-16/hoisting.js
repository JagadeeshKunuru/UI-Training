
//console.log('age', age)
var age = 30

//declarations vs expressions

//hoisting - variables declared with 'var' are hoisted to top of the execution.

//function hoisting

//printNum(3);

// function printNum(number) {
//     console.log('Name')
//     console.log(number)
// }


//function declarations will be hoisted and moved top of the execution

//what about function expressions ?

printNumber();

var printNumber = function() {
    console.log('Name')
}