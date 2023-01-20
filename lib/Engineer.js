const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require('./Employee')

class Engineer extends Employee{
constructor() {
    
    const role = 'Engineer'
    }
    getGitHub() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: "Enter Github Username:",
                }
            ])
            .then((data) => {
                this.github = data.github;
                employee.getName()
            })
    }
    getRole() {
        return this.role;
    }
}
    
module.exports = Engineer;
