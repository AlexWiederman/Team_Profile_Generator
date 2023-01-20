const inquirer = require('inquirer'); //for comand prompt questions
const Employee = require('./Employee')

class Engineer extends Employee{
constructor(github) {
    this.github = github;
    const role = 'Engineer'
    }
    getGitHub() {}
    getRole() {
        return role;
    }
}
    
