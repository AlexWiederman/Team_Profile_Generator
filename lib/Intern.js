const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require('./Employee')

class Intern extends Employee{
    constructor() {
        
        const role = "Intern"
    }
    getSchool() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: "Enter school:",
                }
            ])
            .then((data) => {
                this.school = data.school;
                employee.getName()
            })
    }
    getRole() {
        this.role = "Intern"
    }
}
module.exports = Intern;