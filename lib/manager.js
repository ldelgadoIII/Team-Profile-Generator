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
    <div class="card bg-primary" id="card">
      <div class="card-header text-white" id="cardHead">
        <h1>${this.name}</h1>
        <h2><span><i class="fas fa-mug-hot"></i></span> ${this.role}</h2>
      </div>
      <div class="card-body" id="cardBody">
        <ul class="list-group">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
          <li class="list-group-item">Office number: ${this.office}</li>
        </ul>
      </div>
    </div>
  </div>`;
  }
}

module.exports = Manager;
