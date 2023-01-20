const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require('./Employee')

class Intern extends Employee{
    constructor(school) {
        this.school = school
        const role = "Intern"
    }
    getRole() {}
}