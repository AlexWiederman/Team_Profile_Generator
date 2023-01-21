// Include packages needed for this application
const fs = require('fs'); //for creating html and css docs
const Employee = require("./lib/Employee")

// Initialize objects in other files

const employee = new Employee();

const Manager = employee.getName();

class Memember {

}
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

    ])
    .then((data) => {

    })

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
        })
}


function github() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: "Enter Github Username:",
            }
        ])
        .then((data) => {
        })
}

function github() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: "Enter school:",
            }
        ])
        .then((data) => {
        })
}



// function createFiles() {

//     // Create HTML data from data above
//     HTMLFile = generateHTML(data)
//     fs.writeFile('../dist/website.html', HTMLFile, (err) =>
//         err ? console.log(err) : console.log('Successfully created HTML File!')
//     );
//     // Create CSS
//     CSSFile = generateCSS(data)
//     fs.writeFile('../dist/style.css', CSSFile, (err) =>
//         err ? console.log(err) : console.log('Successfully created CSS File!')
//     );
// }

