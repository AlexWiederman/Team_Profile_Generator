// Include packages needed for this application

const fs = require('fs'); //for creating html and css docs
const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require("./lib/Employee");
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

// Declaring variables globally so they can be read to create the html
var engineerModel
var managerModel
var internModel
var managerHTML 
var internHTML
var engineerHTML 

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
            managerModel = new Manager(data.name, data.id, data.email, data.officeNumber);
            managerHTML = managerCard(managerModel)

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
            engineerModel = new Engineer(data.name, data.id, data.email, data.github);
            engineerHTML = engineerCard(engineerModel)
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
            internModel = new Intern(data.name, data.id, data.email, data.school);
            internHTML = internCard(internModel)
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
                const file = firstHTML + internHTML + managerHTML + engineerHTML + lastHTML;
                
                fs.writeFile('./dist/website.html', file, (err) =>
                    err ? console.log(err) : console.log('Successfully created HTML File!')
                );
            }
        })
}



const firstHTML =
    `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <title>Team Profile</title>
        </head>
        <header style="text-align: center;">
          <h1>Team Profile</h1>
        </header>
        <body>
        `
const lastHTML =
    `
    </body>
    </html>
    `
const managerCard = ({ name, id, email, officeNumber }) =>
    `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    ${name}
                    ID: ${id}
                    Email: ${email}
                    Office number: ${officeNumber}
                </div>
            </div>
        `;

const internCard = ({ name, id, email, school }) =>
    `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    ${name}
                    ID: ${id}
                    Email: ${email}
                    School: ${school}
                </div>
            </div>
        `;

const engineerCard = ({ name, id, email, github }) =>
    `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        ${name}
                        ID: ${id}
                        Email: ${email}
                        Github: ${github}
                    </div>
                </div>
            `;

//Starting with manager
var countEngineer = 0;
var countIntern = 0;
manager();