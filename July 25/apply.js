const player1 = {
  name: "Mike",
  printName: function (age) {
    console.log(`player name is, ${this.name} and his age is ${age}`);
  },
};

const player2 = {
  name: "Tom",
};

player1.printName.apply(player2, [22]);

//by using call we can send different this object
//diff btwn call and apply is - apply accepts array of parameters
