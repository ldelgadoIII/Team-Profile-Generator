// DEPENCIES ==============================
const fs = require("fs");
const inquirer = require("inquirer");

// STARTING DATA ==========================
// Employee class
class Employee {
  constructor(id, email) {
    this.id = id;
    this.email = email;
  }

  printInfo() {
    console.log(`ID: ${this.id}`);
    console.log(`Email: ${this.email}`);
  }
}
// FUNCTIONS ==============================
// USER INTERACTIONS ======================
