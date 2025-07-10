//What is an object ?
//why do we need an object ?

const name = 'Tom'
const age = 22
const petNames = ['cat', 'dog']


//object - combining related information
//combination of key value pairs - key is always a string, value can be of any data type.
//doesn't maintain any order

//creating an object using Object literal

const userDetails = {
    name: 'Tom', //key-value pairs
    age: 22,
    petNames:  {
        firstPetName: 'Cat'
    },
}

console.log(typeof userDetails)

//how can we access values of an object
//there will be 2 ways of accessing values inside an object
//first way - DOT operator

console.log(userDetails.age)

//second way - BRACKET notation

console.log(userDetails['age'])

