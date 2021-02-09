const Employee = require("./Employee");

// Intern subclass
class Intern extends Employee {
  constructor(name, role, id, email, school) {
    super(name, role, id, email);
    this.school = school;
  }
  getSchool() {}
  //   getRole() {
  //     return "Intern";
  //   }
}

module.exports = Intern;
