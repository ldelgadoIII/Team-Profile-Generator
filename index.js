// DEPENDENCIES ==============================
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// STARTING DATA ==========================
// let listQuestion;
const employeeArray = [];

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
];

const employeeChoice = [
  {
    type: "list",
    message: "Would you like to add another employee?",
    name: "option",
    choices: ["Engineer", "Intern", "Finish Team"],
  },
];

// FUNCTIONS ==============================
// First function to run when app begins
function init() {
  inquirer.prompt(initialQs).then((response) => {
    const newManager = new Manager(
      response.name,
      "Manager",
      response.id,
      response.email,
      response.office
    );

    employeeArray.push(newManager);
    console.log(employeeArray);

    // Prompt to add employee
    addEmployee();
  });
}

function addEmployee() {
  inquirer.prompt(employeeChoice).then(async (response) => {
    switch (response.option) {
      // Make an Engineer
      case "Engineer":
        await inquirer.prompt(engineerQs).then(async (response) => {
          const newEngineer = new Engineer(
            response.name,
            "Engineer",
            response.id,
            response.email,
            response.github
          );

          employeeArray.push(newEngineer);

          console.log(employeeArray);
        });
        // Prompt question again
        addEmployee();
        break;

      // Make an Intern
      case "Intern":
        await inquirer.prompt(internQs).then(async (response) => {
          const newIntern = new Intern(
            response.name,
            "Intern",
            response.id,
            response.email,
            response.school
          );

          employeeArray.push(newIntern);

          console.log(employeeArray);
        });

        // Prompt question again
        addEmployee();
        break;
      default:
        break;
    }
  });
}

// INITIALIZATION ======================
init();

// Function to write file
// function writeToFile(fileName, data) {
//   fs.appendFile(fileName, data, (err) =>
//     err ? console.error(err) : console.log("HTML Created!")
//   );

// loop through allEmployes in the array
//create the template
// appendn the template to the html

// for (var i =0; i < allEMployee.length; i++){
//     const newTemplat = templateGenerator(allEMployee[i]);
//     writeToFile(dsfsdf, newTemplate);
// }

// function templateGenerator(data) {
//     return `<p>card template</p>`
// }
// ==================================================
// listQuestion

// switch statemetn
// listQuestion = ...

// secodn inquirer
// new ... ()

// }

// const newIntern = new Intern(res.sdasd, res,.asdqad)
//     generateHTML(response);
//     // writeToFile("dist/index.html", generateHTML(response));
//   });
// }
