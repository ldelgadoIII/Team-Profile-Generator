const Employee = require("./lib/employee");

// Intern subclass
class Intern extends Employee {
  constructor(school) {
    super(name, role, id, email);
    this.school = school;
  }
  getSchool() {}
  getRole() {
    return (this.role = "Intern");
  }
}
