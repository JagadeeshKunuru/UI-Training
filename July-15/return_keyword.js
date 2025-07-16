//why do we need a return keyword ?
//

function sayHello(name, age) {
    const res = `Hello ${name} How are you ?, 
        My age is ${age}`
    return res;
}


const result = sayHello('Mike', 22)
console.log(result) //undefined 

//output