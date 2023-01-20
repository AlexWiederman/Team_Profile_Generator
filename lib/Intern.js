const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require('./Employee')

class Intern extends Employee{
    constructor(school,name,id,email) {
        
       this.school = school
       super(name,id,email)
    }
    getSchool() {
        return this.school 
    }
    getRole() {
        this.role = "Intern"
    }
}
module.exports = Intern;