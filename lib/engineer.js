const Employee = require("./lib/employee");

// Engineer sublcass
class Engineer extends Employee {
  constructor(github) {
    super(name, role, id, email);
    this.github = github;
  }
  getGithub() {}
  getRole() {
    return (this.role = "Engineer");
  }
}
