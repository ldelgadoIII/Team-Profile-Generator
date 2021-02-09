// Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`Email: ${this.email}`);
  }
}

// Manager subclass
class Manager extends Employee {
  constructor(office) {
    this.title = "Manager";
    this.office = office;
  }
}
// Engineer sublcass
class Engineer extends Employee {
  constructor(github) {
    this.title = "Engineer";
    this.github = github;
  }
}
// Intern subclass
class Intern extends Employee {
  constructor(github) {
    this.title = "Intern";
    this.github = github;
  }
}
