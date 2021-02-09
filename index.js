// DEPENDENCIES ==============================
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
    name: "option",
    choices: ["Engineer", "Intern", "Finish Team"],
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
    name: "option",
    choices: ["Engineer", "Intern", "Finish Team"],
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
    name: "option",
    choices: ["Engineer", "Intern", "Finish Team"],
  },
];

const employeeArray = [];

// FUNCTIONS ==============================
// Function to write file
// function writeToFile(fileName, data) {
//   fs.appendFile(fileName, data, (err) =>
//     err ? console.error(err) : console.log("HTML Created!")
//   );

// loop through allEmployes in the array
//create the template
// appendn the template to the html

// for (var i =0; i < allEMployee.length; i++){
//     const newTemplat = template(allEMployee[i]);
//     writeToFile(dsfsdf, newTemplate);
// }
// function template(data) {
//     return `<p>dfsdfsdfsf</p>`
// }

// Function to initialize app
function init() {
  let listQueestion;

  inquirer.prompt(initialQs).then((response) => {
    const newManager = new Manager(
      response.name,
      "Manager",
      response.id,
      response.email,
      response.office
    );

    employeeArray.push(newManager);
    console.log("The contents of the employee Array: ", employeeArray);
    switch (response.option) {
      case "Engineer":
        listQueestion = engineerQs;
        console.log("List Question: ", listQueestion);
        break;
      case "Intern":
        listQueestion = internQs;
        console.log("List Question: ", listQueestion);
        break;
      default:
        process.exit();
        break;
    }

    // employeeObject
    // inquirer.prompt(listQueestion).then((response) => {
    //     switch (response.option){
    //         case "Engineer":
    //             employeeObject = new Engineer(....)
    //             array.push(employeeObject.template)
    //             break;
    //     }
    // });
  });
}

// listQueestion

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

// USER INTERACTIONS ======================
init();
