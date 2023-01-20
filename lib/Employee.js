
const inquirer = require('inquirer'); //for comand prompt questions
const Engineer = require("./Engineer")
const Intern = require("./Intern")

class Employee {
    constructor(role) {
        
    }


    getName() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter name:",
                }
            ])
            .then((data) => {
                this.name = data.name;
                this.getId();
            })
    }

    getId() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter id number:",
                }
            ])
            .then((data) => {
                this.id = data.id;
                this.getEmail()
            })
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter email address:",
                }
            ])
            .then((data) => {
                this.email = data.email;
                this.getRole()
            })
    }

    getRole() {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'questionRole',
                        message: 'Do you want to add another team member?',
                        choices: ["Add Intern", "Add Engineer", "No, I am done"]
                    }
                ])
                .then((data) => {
                    console.log(data)
                    if (data.questionRole == 'Add Intern') {
                        Intern.getSchool();
                    } else if (data.questionRole == 'Add Engineer') {
                        Engineer.getGitHub();
                    } else if(data.questionRole == 'No, I am done') {
                        console.log('Need to create HTML File')
                    }
                })
        }
}

module.exports = Employee;
