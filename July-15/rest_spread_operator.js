function addNumbers(num1,num4, ...num2) {
    console.log(num1) //3
    console.log(num4) //4
    console.log(num2) //[5,6,7,8,9]
}

// const output = addNumbers(3,4,5,6,7,8,9)

// console.log(output)

//rest and spread - both use ...

//rest - rest is used when we pass arguments to the function parameters

//spread operator

function print(values, otherValue) {
    console.log(values)
    console.log(otherValue) //5,6,7,8,9
}

const arr = [5,6,7,8,9]
print(...arr) //print(5,6,7,8,9)
