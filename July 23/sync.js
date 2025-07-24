//By default JS is a sync pattern
//what is a sync pattern ?

//code executes line by line - JS is a single threaded.

//what is a async pattern ?

let personName = "";

function login() {
  console.log("login");
  setTimeout(() => {
    //BE API call which takes 3 secs to get the data from the DB
    personName = "Mike";
    console.log("inside timeout");
  }, 10000);
}

function printName() {
  console.log("person name", personName);
}

login();
printName();

//login
//person name
//inside timeout
