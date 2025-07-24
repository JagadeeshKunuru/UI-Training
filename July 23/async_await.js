let personName = "";
function hitDB() {
  return new Promise((resolve, reject) => {
    //BE API call to DB
    setTimeout(() => {
      personName = "Tom";
      reject(personName);
    }, 5000);
  });
}

async function printName() {
  try {
    await hitDB();
    console.log("person", personName);
  } catch (err) {
    console.log("error occured");
  }
}

printName();
