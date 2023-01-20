const inquirer = require('inquirer'); //for comand prompt questions

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email;
        const role = Employee
    }
    getName() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter name",
                }
            ])
            .then((data) => {
                return data
            })
    }

    getId() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: "Enter id number",
                }
            ])
            .then((data) => {
                return data

            })
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter email address",
                }
            ])
            .then((data) => {
                return data
            })
    }

    getRole() {
        return role
    }


}

module.exports = Employee;
