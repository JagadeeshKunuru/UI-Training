const user = {
  address: {
    city: {
      street: {
        aptNo: "123",
      },
    },
  },
};

//undefined
//city is not defined

function printCity() {
  //print city from user object or print city is not available
  // 2 solutions
  //console.log(user.address.city);c
  console.log(user.address?.city?.street?.aptNo);
}

printCity();
