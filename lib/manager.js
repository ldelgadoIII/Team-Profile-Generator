const Employee = require("./Employee");

// Manager subclass
class Manager extends Employee {
  constructor(name, role, id, email, office) {
    super(name, role, id, email);
    this.office = office;
  }

  //   getRole() {
  //     return (this.role = "Manager");
  //   }

  getTemplate(data) {
    return `<h1>${data.name}</h1>`;
  }
}

module.exports = Manager;
