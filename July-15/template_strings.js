//template strings - ES6 concept

//Hello Mike, How are you ?
function sayHello(name) {
    console.log('Hello ' + name + 'How are you ?')
}

// sayHello('Mike')

//'' can be replaced with ``

//above logic can be written using template literals ot template strings

function sayHello(name, age) {
    console.log(`Hello ${name} How are you ?, 
        My age is ${age}`)
}

sayHello('Mike', 22)

//if we want to refer the parameters inside template strings use ${}