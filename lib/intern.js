const Employee = require("./Employee");

// Intern subclass
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, "Intern", id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.role;
  }

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
          <li class="list-group-item">School: ${this.school}</li>
        </ul>
      </div>
    </div>
  </div>`;
  }
}

module.exports = Intern;
