// Employee class
class Employee {
  constructor(name, role, id, email) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
  }

  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`ID: ${this.id}`);
    console.log(`Email: ${this.email}`);
  }
}

module.exports = { Employee };
