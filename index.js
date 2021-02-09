// DEPENDENCIES ==============================
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const Employee = require("./lib/employee");

// STARTING DATA ==========================
// Questions to ask user
const initialQs = [
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
    type: "input",
    message: "Please enter an office number.",
    name: "office",
  },
  {
    type: "list",
    message: "Would you like to add another employee?",
    name: "menu",
    choice: ["Engineer", "Intern", "Finish Team"],
  },
];

const engineerQs = [
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
    type: "input",
    message: "Please enter a github username.",
    name: "github",
  },
  {
    type: "list",
    message: "Would you like to add another employee?",
    name: "menu",
    choice: ["Engineer", "Intern", "Finish Team"],
  },
];

const internQs = [
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
    type: "input",
    message: "Please enter a school.",
    name: "school",
  },
  {
    type: "list",
    message: "Would you like to add another employee?",
    name: "menu",
    choice: ["Engineer", "Intern", "Finish Team"],
  },
];

// FUNCTIONS ==============================
// Function to write file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("HTML Created!")
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(initialQs).then((response) => {
    writeToFile("ReadMe.md", generateHTML(response));
  });
}
// USER INTERACTIONS ======================
