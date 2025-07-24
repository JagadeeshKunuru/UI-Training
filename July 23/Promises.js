//callback hell - multiple callbacks
//what are promises ?

//Promise is nothing but an object which returns a value in future
//Promise can be either be fullfilled or rejected.

//Promise object states - pending, fullfilled, reject

//Promises will resolve callback hell problem
let personName = "";
function hitDB() {
  return new Promise((resolve, reject) => {
    //BE API call to DB
    setTimeout(() => {
      personName = "Tom";
      reject(personName);
    }, 10000);
  });
}

hitDB()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("error occuredd");
  });
