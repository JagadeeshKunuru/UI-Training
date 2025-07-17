//what is a impure function ?//dependent function - which is dependent on other state variables

const num3 = 100;// this value depends on some other DB call

function addNum(num1, num2) {
    return num1 + num2 + num3
}

console.log(addNum(3,4)) //this will return a different value



//what is a pure function ? //independent function - which is not dependent on other state variables
//returns same value whenever you execute.

function sumNumber(age) {
    return age + 90
}

sumNumber(3) 