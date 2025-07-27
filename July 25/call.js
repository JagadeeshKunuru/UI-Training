const player1 = {
  name: "Mike",
  printName: function (age) {
    console.log("player name is", this.name);
  },
};

const player2 = {
  name: "Tom",
};

player1.printName.call(player2, 22);

//by using call we can send different this object
