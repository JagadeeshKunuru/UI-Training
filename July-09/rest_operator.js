var printValue = (num, otherNum, secondValue, ...remaining) => {
    console.log(num)
    console.log(otherNum)
    console.log(secondValue)
    console.log(remaining) // store in array format
}

printValue(12, 1, 2, 3)

//output
//12,1,2, [3]

//Example 2

var printValue = ( ...remaining) => {
    console.log(remaining) // store in array format
}

printValue(12, 1, 2, 3)


//[12,1,2,3]