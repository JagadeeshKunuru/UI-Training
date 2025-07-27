const user = {
  name: "Mike",
  printName: function () {
    console.log(`Name is ${this.name}`);
  },
};

//user.printName();
const anotherUser = {
  name: "Tom",
};
const bindedPrintName = user.printName.bind(user);
const bindedPrintName1 = user.printName.bind(anotherUser);
bindedPrintName.call(anotherUser);

//bind will bind an object to its context
