//what is a Map data type ?

const userDetails = {
  name: "Mike",
  age: 22,
  1: "true",
  true: "this is true",
};

console.log(Object.keys(userDetails));

//data type - which is Map data type
//Map can hold keys and values, keys can be of any data type, it will not allow duplicates keys
//even if we add same key, the value will be overriden

const userDetailsWithMap = new Map();

userDetailsWithMap.set(1, "true");
userDetailsWithMap.set(true, "this is true");
userDetailsWithMap.set(function () {}, "this is a function");
userDetailsWithMap.set(1, "text");

console.log("Map", userDetailsWithMap);

//console.log(userDetailsWithMap.keys());
// [
//   [1, "true"],
//   [true, "this is true"],
//   [function () {}, "this is a function"],
// ];

//how to iterate through Map

for (let [k, v] of userDetailsWithMap) {
  console.log(k);
}

//in built method
