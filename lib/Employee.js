
const inquirer = require('inquirer'); //for comand prompt questions
const Engineer = require("./Engineer")
const Intern = require("./Intern")

class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    // getRole() {
    //         return this.role
    //     }
}

module.exports = Employee;
