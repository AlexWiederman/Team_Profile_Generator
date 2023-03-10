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

var internArray = [];
var engineerArray = [];
var managerArray = [];
var array = [];
var arrayCard =[];

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
            array.push(managerModel)

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
            array.push(engineerModel)

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
            array.push(internModel)

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
                    const cards = createHTML(array)

                    var totalCards = ""
                for (i=0; i<cards.length;i++) {
                    totalCards = totalCards + cards[i];

                }
                const file = firstHTML + totalCards + lastHTML;
                fs.writeFile('./dist/website.html', file, (err) =>
                    err ? console.log(err) : console.log('Successfully created HTML File!')
                );
            }
        })
}

function createHTML(array) {
    for (i=0; i<array.length;i++) {
        console.log(array[i].role)
        if (array[i].role == 'Intern') {
        arrayCard[i]=`
        
            <div class="card" style="display:inline-block">
                <div class="card-body" style="text-align: center;">
                    ${array[i].name} <br>
                    ${array[i].role} <br>
                    ID: ${array[i].id} <br>
                    <a href = "mailto: ${array[i].email}">${array[i].email}</a> <br>
                    School: ${array[i].school} <br>
                </div>
            </div>
        
        `;
    } else if (array[i].role == 'Manager') {
        arrayCard[i]=`
        
            <div class="card" style="display:inline-block">
                <div class="card-body" style="text-align: center;">
                    ${array[i].name} <br>
                    ${array[i].role} <br>
                    ID: ${array[i].id} <br>
                    <a href = "mailto: ${array[i].email}">${array[i].email}</a> <br>
                    Office number: ${array[i].officeNumber} <br>
                </div>
            </div>
        
        `;

    } else if (array[i].role == 'Engineer') {
        arrayCard[i]=`
        
            <div class="card" style="display:inline-block">
                <div class="card-body" style="text-align: center;">
                    ${array[i].name} <br>
                    ${array[i].role} <br>
                    ID: ${array[i].id} <br>
                    <a href = "mailto: ${array[i].email}">${array[i].email}</a> <br>
                    <a href="https://github.com/${array[i].github}">Github Profile: ${array[i].github}</a>
                </div>
            </div>
        
        `;
    }
    
    }
    return arrayCard
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
        <header style="text-align: center;background-color: rgb(0, 153, 255);">
          <h1>Team Profile</h1>
        </header>
        <body style="background-color: aqua;">
        <div class="container-sm">
        `
const lastHTML =
    `
    </div>
    </body>
    </html>
    `

//Starting with manager
var countEngineer = 0;
var countIntern = 0;
manager();