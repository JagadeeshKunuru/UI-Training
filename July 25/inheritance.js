//what is an inheritance ?
//children will inherit some properties from its parent

class School {
  constructor(schoolName) {
    this.schoolName = schoolName;
  }
  printSchool() {
    console.log("school name is", this.schoolName);
  }
}

class Student extends School {
  constructor(id) {
    super("Mike School");
    this.id = id;
  }
  printId() {
    console.log("id here", this.id);
    super.printSchool();
  }
}

//const MikeSchool = new School("Mike School");
const studentObj = new Student(1234);

console.log(studentObj.printId());

//rules of inheritance
