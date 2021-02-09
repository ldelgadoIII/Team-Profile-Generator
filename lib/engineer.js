const Employee = require("./Employee");

// Engineer sublcass
class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    super(name, role, id, email);
    this.github = github;
  }
  getGithub() {}
  //   getRole() {
  //     return (this.role = "Engineer");
  //   }
}

module.exports = Engineer;
