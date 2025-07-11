let person = {
    name: 'Tom',
    age: 22,
    address: {
        street: '1234 st',
        city: 'Dallas'
    }
}

let otherPerson = person

person.address.street = '999 ranch'

console.log('person', person)
console.log('other', otherPerson)