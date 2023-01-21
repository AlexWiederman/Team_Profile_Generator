const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require('./Employee')

class Engineer extends Employee {
constructor(github,name,id,email) {
    this.github = github
    super(name,id,email)
    this.role = 'Engineer'
    
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}
    
module.exports = Engineer;
