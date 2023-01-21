const Employee = require('./Employee')
const Index = require('../index')

class Manager extends Employee{
    constructor(name,id,email,officeNumber) {
        
        super(name,id,email)
        this.officeNumber = officeNumber
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