const Employee = require("./Employee");

// Manager subclass
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, "Manager", id, email);
    this.office = office;
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
          <li class="list-group-item"><a href="mailto:${this.email}">Email: ${this.email}</a></li>
          <li class="list-group-item">Office number: ${this.office}</li>
        </ul>
      </div>
    </div>
  </div>`;
  }
}

module.exports = Manager;
