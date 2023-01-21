const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name,id,email,officeNumber) {
        this.officeNumber = officeNumber
        super(name,id,email)
         this.role = 'Manager'
    }
    getOfficeNumber() {
        return this.OfficeNumber
    }
    getRole() {
        return this.role
    }
}


module.exports = Manager;