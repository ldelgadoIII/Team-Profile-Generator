// DEPENDENCIES ==============================
const fs = require("fs");
const inquirer = require("inquirer");

// STARTING DATA ==========================
// Questions to ask user
const generalQs = [
  {
    type: "input",
    message: "Please enter a name.",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter an employee ID.",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter an employee email.",
    name: "email",
  },
  {
    type: "list",
    message: "Would you like to add another employee?",
    name: "menu",
    choice: ["Engineer", "Intern", "Finish Team"],
  },
];

const managerQs = [
  {
    type: "input",
    message: "Please enter an office number.",
    name: "office",
  },
];
const employeeQs = [
  {
    type: "input",
    message: "Please enter a github username.",
    name: "office",
  },
];

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
// FUNCTIONS ==============================
// Function to write file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("HTML Created!")
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("ReadMe.md", response);
  });
}
// USER INTERACTIONS ======================
