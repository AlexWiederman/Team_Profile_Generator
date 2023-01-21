// Include packages needed for this application

const fs = require('fs'); //for creating html and css docs
const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require("./lib/Employee");
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
var mCard

function manager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter id number:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter email address:",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter office number:",
            }

        ])
        .then((data) => {
            new Manager(data.name, data.id, data.email, data.officeNumber);
            mCard = managerCard(data);


            loopQuestions()
        })
}

function engineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter id number:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter email address:",
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter Github Username:",
            }

        ])
        .then((data) => {
            new Engineer(data.name, data.id, data.email, data.github);
            loopQuestions()
        })
}

function intern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter id number:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter email address:",
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter school:",
            }

        ])
        .then((data) => {
            new Intern(data.name, data.id, data.email, data.school);
            loopQuestions()
        })
}

function loopQuestions() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'questionRole',
                message: 'Do you want to add another team member?',
                choices: ["Add Intern", "Add Engineer", "No, I am done"]
            }
        ])
        .then((data) => {
            if (data.questionRole == "Add Intern") {
                intern()
            } else if (data.questionRole == "Add Engineer") {
                engineer()
            } else {
                // createFiles()
                console.log(mCard)
                // const file = HTML(mCard);
                fs.writeFile('./dist/website.html', file, (err) =>
                    err ? console.log(err) : console.log('Successfully created HTML File!')
                );
            }
        })
}

//Starting with manager
manager();

HTML = ({ mCard }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
 ${mCard}
</body>
</html>`;


const managerCard = ({ name, id, email, officeNumber }) =>
    `
    <div class="card">
    <div class="card-body">
      ${name}
      ${id}
      ${email}
      ${officeNumber}
    </div>
  </div>`;


function createFiles() {

    // Create HTML file

    // fs.writeFile('../dist/website.html', HTMLFile, (err) =>
    //     err ? console.log(err) : console.log('Successfully created HTML File!')
    // );
    // Create CSS
    // CSSFile = generateCSS(data)
    // fs.writeFile('../dist/style.css', CSSFile, (err) =>
    //     err ? console.log(err) : console.log('Successfully created CSS File!')
    // );
}

