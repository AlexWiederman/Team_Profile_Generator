const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school, name, id, email) {
        this.school = school
        super(name, id, email)
        this.role = "Intern"
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return this.role
    }
}
module.exports = Intern;