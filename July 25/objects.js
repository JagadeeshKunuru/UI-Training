//what is an object ?
//collection of key value pairs
//How many ways can we create an object ?
//1)Object literals - {}
//2)new Object
//3)Factory functions
//4)Object.assign
//5)Constructor function
//6)using classes

//1)Object literals - {}

const person = {
  name: "Mike",
  age: 22,
  printName: function () {},
};

console.log(person.hasOwnProperty("name"));

person.address = "1234 st";

console.log(person);

//2)new Object

const personObj = new Object();
personObj.name = "Mike";

console.log(personObj);

//3)Factory functions

function user(name, age) {
  return {
    name: name,
    age: age,
  };
}

const newUser = user("Mike", 22);
console.log("newuser", newUser);

//4)Object.assign

const personDetails = Object.assign({});
personDetails.name = "Jack";
console.log("details", personDetails);

//5)Constructor function
//rules - 1) name of the function should start with uppercase
//2) objects are created using new keyword

function UserDetails(name, age) {
  (this.name = name), (this.age = age);
}

const newUserDetails = new UserDetails("abcd", 22);
//this = {}
//this.name = "abcd"
//this.age = 22
console.log("new", newUserDetails);
