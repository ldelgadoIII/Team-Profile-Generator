const Employee = require("./lib/employee");

// Manager subclass
class Manager extends Employee {
  constructor(office) {
    super(name, role, id, email);
    this.office = office;
  }

  getRole() {
    return (this.role = "Manager");
  }
}
