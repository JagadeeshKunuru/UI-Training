//first way

//creating an object using Object literal

const userDetails = {
    name: 'Tom', //key-value pairs
    age: 22,
    petNames:  ['cat', 'dog'],
}

//second way - using Factory functions

function printName(name1, age1) {
    return {
        name: name1,
        age: age1
    }
}

const name = printName('Tom', 22)
console.log(name)

//Third way of creating objects - new Object()

const user = new Object()
user.age = 22
user.name = 'Mike'

console.log('user', user)

//fourth way of creating a object - using .assign()

const prevName = {
    name: 'Jack'
}

const newName = Object.assign({}, prevName)

console.log('newName', newName)

//ES6 - classes - creating an object using classes