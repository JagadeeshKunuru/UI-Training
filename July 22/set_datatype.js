//how can we remove duplicate values from an array ?
//set will not allow duplicates

const arr = new Set();

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);

console.log(arr.has(1));

console.log(arr.size);

//clear

arr.clear();
console.log(arr.size);

//why do we need Set when we have Arrays ?

//1) Set will not allow duplicates

const newArr = [1, 2, 3, 4];

//how do we check if 2 exists or not

console.log(newArr.includes(2));

//fast access and lookup

//Big O notation
//2 - O(n) - time will vary based on the size of the input, slow lookup
// O(1) - time will be same even though input changes - fast access, lookup
