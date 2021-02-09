// DEPENDENCIES ==============================
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");

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

// FUNCTIONS ==============================
// Function to write file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("HTML Created!")
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(generalQs).then((response) => {
    writeToFile("ReadMe.md", generateHTML(response));
  });
}
// USER INTERACTIONS ======================
