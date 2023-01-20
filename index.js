// Include packages needed for this application
const fs = require('fs'); //for creating html and css docs
const Employee = require("./lib/Employee")

// Initialize objects in other files

const employee = new Employee();

const Manager = employee.getName();


// inquirer
        //     .prompt([
        //         {
        //             type: 'input',
        //             name: 'name',
        //             message: "Enter name:",
        //         }
        //     ])
        //     .then((data) => {
        //         this.name = data.name;
        //         this.getId();
        //     })

        // inquirer
        //     .prompt([
        //         {
        //             type: 'input',
        //             name: 'github',
        //             message: "Enter Github Username:",
        //         }
        //     ])
        //     .then((data) => {
        //         this.github = data.github;
        //         employee.getName()
        //     })

        // inquirer
        //     .prompt([
        //         {
        //             type: 'input',
        //             name: 'id',
        //             message: "Enter id number:",
        //         }
        //     ])
        //     .then((data) => {
        //         this.id = data.id;
        //         this.getEmail()
        //     })

        // inquirer
            //     .prompt([
            //         {
            //             type: 'list',
            //             name: 'questionRole',
            //             message: 'Do you want to add another team member?',
            //             choices: ["Add Intern", "Add Engineer", "No, I am done"]
            //         }
            //     ])
            //     .then((data) => {
            //         console.log(data)
            //         if (data.questionRole == 'Add Intern') {
            //             Intern.getSchool();
            //         } else if (data.questionRole == 'Add Engineer') {
            //             Engineer.getGitHub();
            //         } else if(data.questionRole == 'No, I am done') {
            //             console.log('Need to create HTML File')
            //         }
            //     })

            // inquirer
        //     .prompt([
        //         {
        //             type: 'input',
        //             name: 'school',
        //             message: "Enter school:",
        //         }
        //     ])
        //     .then((data) => {
        //         this.school = data.school;
        //         employee.getName()
        //     })

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

