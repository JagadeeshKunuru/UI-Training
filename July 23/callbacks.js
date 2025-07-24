//callback
//what is a callback function ?
//function which accepts another function as an argument
//this argument is nothing but a callback function
//callback will execute after some tasks were performed inside the HOF
let personName = "";

function login(callbackFunction) {
  console.log("login");
  setTimeout(() => {
    //BE API call which takes 3 secs to get the data from the DB
    personName = "Mike";
    console.log("inside timeout");
    callbackFunction(printAge);
  }, 10000);
}

function printName() {
  console.log("person name", personName);
}

function printAge() {
  console.log("person age");
}

login(printName);
