// Include packages needed for this application
const fs = require('fs'); //for creating html and css docs
const inquirer = require('inquirer'); //for comand prompt questions

// Initialize objects in other files
const Engineer = new Engineer();
const Manager = new Manager();
const Intern = new Intern();
const Employee = new Employee();

function questions() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: managerName,
                message: "Enter Team Mangers name",
            },
            {
                type: 'input',
                name: id,
                message: "Enter Employee ID",
            },
            {
                type: 'input',
                name: managerName,
                message: "Enter email address",
            },
            {
                type: 'input',
                name: managerName,
                message: "Enter office number",
            },
            {
                type: 'list',
                name: addMore,
                message: "Choose one of the following",
                choices: ["Add an Engineer", "Add an Intern", "Finish building team"]
            }
        ])
        .then((data) => {
            if (data.addMore == "Add an Engineer") {

            } else if(data.addMore == "Add an Intern") {

            } else {
                // Create HTML data from data above
                HTMLFile = generateHTML(data)
            fs.writeFile('../dist/website.html', HTMLFile, (err) =>
                err ? console.log(err) : console.log('Successfully created HTML File!')
            );
            // Create CSS 
            CSSFile = generateHTML(data)
            fs.writeFile('../dist/style.css', CSSFile, (err) =>
                err ? console.log(err) : console.log('Successfully created CSS File!')
            );
            }
        })
}