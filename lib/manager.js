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
      <div class="card-header" id="cardHead">
        <h1>${this.name}</h1>
        <h2><span><i class="fas fa-mug-hot"></i></span> ${this.role}</h2>
      </div>
      <div class="card-body" id="card">
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
