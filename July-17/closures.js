//scoping - Global, function, block

function outerFunc() {
    let count = 5 
    return function(val) {
        count = count + val;
        return count;
    };
}

console.log(window)

var inner = outerFunc()
console.log(inner(5))
console.log(inner(20))
console.log(inner(30))


//closure - a inner function inside a outer function which has scope of its creation.
//closure can be used for encapsulating - used to store private variables