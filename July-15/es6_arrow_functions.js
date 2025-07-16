// function addTwoNumbers(num1, num2) {
//     const res1 = num1 + num2
//     console.log(res1)
// }

// addTwoNumbers(5,6)

//how can we convert the above function into an arrow functions ?

const addTwoNumbers = (num1, num2) =>   //parameters
    {
        const res = num1 + num2
        return res
    }
 
const num1 = 9

addTwoNumbers(5,6) //arguments

//if it is only one line - then we can return it in the same line no need of {}

const addTwoNumbers1 = (num1, num2) =>  num1 + num2
 
//if it has only one param then no need of closing with ()

const printName = name => console.log(name)