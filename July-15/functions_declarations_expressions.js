//functions 

//what are functions ?

//combining group of logic, encapsulating the piece of code, reusability of logic

const num1 = 2
const num2 = 3

const res = num1 + num2

console.log(res)

const num3 = 3
const num4 = 4

const res1 = num3 + num4

console.log(res1)

//function declaration or function statement
function addTwoNumbers(num1, num2) {
    const res1 = num1 + num2
    console.log(res1)
}

addTwoNumbers(5,6)

//function expression 

const addTwoNumbers =  function(num1, num2) {
    const res1 = num1 + num2
    console.log(res1)
}

addTwoNumbers(5,6)