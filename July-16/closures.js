//scoping - Global, function, block

//function scope

function addNum() {
    let num1 = 20
    return function(num2) {
        return num1 + num2
    }
}

var innerFun = addNum()

var res = innerFun(22)

console.log(res)
