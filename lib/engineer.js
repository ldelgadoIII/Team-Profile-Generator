const Employee = require("./Employee");

// Engineer sublcass
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, "Engineer", id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }

  getTemplate() {
    return `<div class="col-md-4">
    <div class="card bg-primary" id="card">
      <div class="card-header text-white" id="cardHead">
        <h1>${this.name}</h1>
        <h2><span><i class="fas fa-glasses"></i></span> ${this.role}</h2>
      </div>
      <div class="card-body" id="cardBody">
        <ul class="list-group">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}" target="_blank">https://github.com/${this.github}</a></li>
        </ul>
      </div>
    </div>
  </div>`;
  }
}

module.exports = Engineer;
