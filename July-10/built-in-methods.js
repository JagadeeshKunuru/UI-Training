let person = {
    name: 'Tom',
    age: 22,
    address: {
        street: '1234 st'
    }
}

// person.phone = '1233333'
// person['newAddress'] = '272727 st'

//console.log(person)

//how to find the list of keys

for(const keyNames in person) {
   // console.log(keyNames)
}

let keyNames = Object.keys(person)

//console.log('keys', keyNames)

//how to find the values

// for(const keyNames in person) {
//     console.log(person[keyNames])
// }

let personValues =  Object.values(person)

//console.log('values', personValues)

//find if names exists
for(const keyNames in person) {
   if(keyNames === 'name') {
   // console.log('names exists')
   }
}

let nameExists =  Object.hasOwnProperty('name')
//console.log(nameExists)

//freeze method

Object.freeze(person)

person.name = 'Mike'

//console.log('person', person)

//Object.assign - is to create a new copy of an object

let newPerson = Object.assign({}, person)

console.log('newP', newPerson)
