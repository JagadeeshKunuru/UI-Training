const person = {
    name: 'Tom',
    age: 22,
    phone: '133444'
}

// const personName = person['name']
// const personAge = person['age']

const { age } = person

console.log('personAge', age)

//Array destructuring

const arr = ['Tom', 'Mike']

const [ firstName ] = arr

console.log('firstName', firstName)


function printName({name}) {
   // console.log('name', random)
    //print name from person object
    // for(const keys in person) {
    //     if(keys === 'name') {
    //         console.log(person[keys])
    //     }
    // }
    console.log('name', name)
}

//printName(person)

//output
//'Tom', 22, '133444'