class Person {
  #password = "abcd1233";
  //getters setters

  get password() {
    return this.#password;
  }

  set password(val) {
    this.#password = val;
  }
}

const newPerson = new Person();
newPerson.password = "12212";
console.log(newPerson.password);
