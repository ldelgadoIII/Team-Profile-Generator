const Employee = require("./Employee");

// Engineer sublcass
class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    super(name, role, id, email);
    // this.role = "Engineer";
    this.github = github;
  }
  getGithub() {}
  //   getRole() {
  //     return (this.role = "Engineer");
  //   }

  getTemplate() {
    return `<div class="col-md-4">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem">
      <div class="card-header">
        <h1>${this.name}</h1>
        <h2><span>icon</span>${this.role}</h2>
      </div>
      <div class="card-body" id="card">
        <ul class="list-group">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: ${this.email}</li>
          <li class="list-group-item">GitHub: https://github.com/${this.github}</li>
        </ul>
      </div>
    </div>
  </div>`;
  }
}

module.exports = Engineer;
