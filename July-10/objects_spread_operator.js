//spread operator will create a shallow copy

let person = {
    name: 'Tom',
    age: 22,
    address: {
        street: '1234 st'
    }
}

let otherPerson = {...person} 
otherPerson.name = 'Mike'
otherPerson.address.street = '999 ranch'

//console.log('per', person)
// {
    // name: 'Tom',
    // age: 22,
    // address: {
    //     street: '999 ranch'
    // }
//}
//console.log('oth', otherPerson)
// {
    // name: 'Mike',
    // age: 22,
    // address: {
    //     street: '999 ranch'
    // }
//}


//deep copy

let somePerson = structuredClone(person)
somePerson.address.street = '67676 colony'

console.log('per', person)
console.log('some', somePerson)