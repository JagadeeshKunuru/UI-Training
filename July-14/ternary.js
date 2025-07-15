//what is a ternanry operator ? 
//one of the ES6+ feature 

//alternate for if...else

const age = 10

// if(age > 30) {
//     console.log('age is greater than 30')
// } else {
//     console.log('age is less than 30')
// }

//we have to reduce lines as much as we can 

// age > 30 ? 
//     console.log('age is greater than 30') 
//     : age === 20 ? 
//     console.log('age is equals to 20') 
//     : console.log('age is less than 30')

//example 2

let arr = ''

arr ? arr + 'Mike' : arr 

//falsy values - null undefined '' Nan false 0