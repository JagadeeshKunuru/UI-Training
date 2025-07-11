let person = {
    name: 'Tom',
    age: 22,
    address: '1234 st',
    keyName: 'test'
}

//DOT
//console.log(person.age)

//brakcet

//console.log(person['age'])

for(const random in person) {
    console.log(person[random]) 
}

for(const random in person) {
    console.log(person.random) //4 undefined
}

//key