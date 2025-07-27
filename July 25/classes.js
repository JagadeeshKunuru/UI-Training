//why do we need classes ? when we have many ways to create objects
//Below are the reasons
//1) cleaner syntax
//2) better structure
//3) supports inheritance
//4) supports encapsulation (we should not provide some data to the outside world)

//How do we define a class ?

class Person {
  constructor(name) {
    this.name = name;
    console.log("constructor called");
  }
}

const personMike = new Person("Mike"); //this = {}
const personTom = new Person("Tom");
console.log("personMike", personMike);
console.log("personTom", personTom);

//basic syntax of classes
//we should not declare variables using var , let const, because properties defined
//--inside classes are already scoped.
//for defining methods also we should not use function keyword.
class Player {
  name = "Mike";
  printName(name) {
    console.log("name herew");
  }
}
